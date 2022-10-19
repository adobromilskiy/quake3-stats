package api

import (
	"encoding/json"
	"log"
	"net/http"
	"strconv"

	"go.mongodb.org/mongo-driver/mongo"
)

type Server struct {
	Port       string
	DbClient   *mongo.Client
	DbName     string
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
	mux.HandleFunc("/api/ffa", s.getFAAtotals)
	mux.HandleFunc("/api/ffa/matches", s.getFAAmatches)
	mux.HandleFunc("/api/ffa/players", s.getFAAplayers)
	mux.HandleFunc("/api/ffa/logs", s.getFAAlogs)

	return mux
}

// GET: /api/ffa/players
func (s *Server) getFAAplayers(w http.ResponseWriter, r *http.Request) {
	repo := MatchRepository{
		Ctx: r.Context(),
		DB:  s.DbClient.Database(s.DbName),
	}
	defer s.DbClient.Disconnect(r.Context())
	players, err := repo.getPlayers()
	if err != nil {
		log.Printf("[ERROR] failed to get players: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	for i := range players {
		players[i].Weapons, err = repo.getPlayerWeapons("FFA", players[i].Name)
		if err != nil {
			log.Printf("[ERROR] failed to get player weapons: %s", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		players[i].Items, err = repo.getPlayerItems("FFA", players[i].Name)
		if err != nil {
			log.Printf("[ERROR] failed to get player items: %s", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		players[i].Powerups, err = repo.getPlayerPowerups("FFA", players[i].Name)
		if err != nil {
			log.Printf("[ERROR] failed to get player powerups: %s", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
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

// GET: /api/ffa
func (s *Server) getFAAtotals(w http.ResponseWriter, r *http.Request) {
	repo := MatchRepository{
		Ctx: r.Context(),
		DB:  s.DbClient.Database(s.DbName),
	}
	defer s.DbClient.Disconnect(r.Context())
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

	winners, err := repo.getWinners("FFA")
	if err != nil {
		log.Printf("[ERROR] failed to get winners: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	maps, err := repo.getMaps("FFA")
	if err != nil {
		log.Printf("[ERROR] failed to maps: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	type Response struct {
		TotalGames int      `json:"total_games"`
		Duration   string   `json:"duration"`
		Winners    []Winner `json:"winners"`
		Maps       []Map    `json:"maps"`
	}

	resp := Response{
		TotalGames: total,
		Duration:   duration.String(),
		Winners:    winners,
		Maps:       maps,
	}

	err = json.NewEncoder(w).Encode(resp)
	if err != nil {
		log.Printf("[ERROR] failed to marshal data: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}

// GET: /api/ffa/matches
func (s *Server) getFAAmatches(w http.ResponseWriter, r *http.Request) {
	repo := MatchRepository{
		Ctx: r.Context(),
		DB:  s.DbClient.Database(s.DbName),
	}
	defer s.DbClient.Disconnect(r.Context())

	perpage, _ := strconv.Atoi(r.URL.Query().Get("perpage"))
	page, _ := strconv.Atoi(r.URL.Query().Get("page"))
	if page == 0 {
		page = 1
	}
	if perpage == 0 {
		perpage = 10
	}
	skip := (page - 1) * perpage
	limit := skip + perpage

	matches, err := repo.getMatches("FFA", limit, skip)
	if err != nil {
		log.Printf("[ERROR] failed to get matches: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	err = json.NewEncoder(w).Encode(matches)
	if err != nil {
		log.Printf("[ERROR] failed to marshal data: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}

// GET: /api/ffa/logs
func (s *Server) getFAAlogs(w http.ResponseWriter, r *http.Request) {
	repo := MatchRepository{
		Ctx: r.Context(),
		DB:  s.DbClient.Database(s.DbName),
	}
	defer s.DbClient.Disconnect(r.Context())

	perpage, _ := strconv.Atoi(r.URL.Query().Get("perpage"))
	page, _ := strconv.Atoi(r.URL.Query().Get("page"))
	if page == 0 {
		page = 1
	}
	if perpage == 0 {
		perpage = 10
	}
	skip := (page - 1) * perpage
	limit := skip + perpage

	logs, err := repo.getLogs(limit, skip)

	if err != nil {
		log.Printf("[ERROR] failed to get logs: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	err = json.NewEncoder(w).Encode(logs)
	if err != nil {
		log.Printf("[ERROR] failed to marshal data: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
}
