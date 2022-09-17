package api

import (
	"encoding/json"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/mongo"
)

type Server struct {
	Port       string
	Database   *mongo.Database
	httpServer *http.Server
}

func (s *Server) Run() {
	s.httpServer = &http.Server{
		Addr:    s.Port,
		Handler: s.routes(),
	}

	err := s.httpServer.ListenAndServe()
	if err != nil {
		log.Printf("[ERROR] http server terminated: %s", err)
	}
}

func (s *Server) routes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/ffa/players", s.getFAAplayers)
	mux.HandleFunc("/api/ffa", s.getFAAtotals)

	return mux
}

func (s *Server) getFAAplayers(w http.ResponseWriter, r *http.Request) {
	repo := MatchRepository{
		Ctx: r.Context(),
		DB:  s.Database,
	}
	players, err := repo.getPlayers()
	if err != nil {
		log.Printf("[ERROR] failed to get players: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	err = json.NewEncoder(w).Encode(players)
	if err != nil {
		log.Printf("[ERROR] failed to marshal data: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}

func (s *Server) getFAAtotals(w http.ResponseWriter, r *http.Request) {
	repo := MatchRepository{
		Ctx: r.Context(),
		DB:  s.Database,
	}
	duration, err := repo.getTotalDuration()
	if err != nil {
		log.Printf("[ERROR] failed to get duration: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	total, err := repo.getTotalMatches()
	if err != nil {
		log.Printf("[ERROR] failed to get total matches: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	type Response struct {
		TotalGames int    `json:"total_games"`
		Duration   string `json:"duration"`
	}

	resp := Response{
		TotalGames: total,
		Duration:   duration.String(),
	}

	err = json.NewEncoder(w).Encode(resp)
	if err != nil {
		log.Printf("[ERROR] failed to marshal data: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
