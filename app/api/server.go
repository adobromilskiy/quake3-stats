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
	mux.HandleFunc("/api/ffa", s.getFAAmatches)

	return mux
}

func (s *Server) getFAAmatches(w http.ResponseWriter, r *http.Request) {
	repo := MatchRepository{
		Ctx: r.Context(),
		DB:  s.Database,
	}
	matches, err := repo.getAll()
	if err != nil {
		log.Printf("[ERROR] failed to get matches: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	var totalTime int
	for _, m := range matches {
		totalTime += m.Duration
	}

	duration := (DayDuration)(totalTime)

	resp := FFAResponse{
		TotalGames: len(matches),
		Duration:   duration.String(),
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	err = json.NewEncoder(w).Encode(resp)
	if err != nil {
		log.Printf("[ERROR] failed to marshal data: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
