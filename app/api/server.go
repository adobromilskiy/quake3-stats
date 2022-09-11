package api

import (
	"encoding/json"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
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
	col := s.Database.Collection("matches")
	ctx := r.Context()
	var matches []Match

	// totalGames, err := col.CountDocuments(r.Context(), bson.M{"type": "FFA"})
	cur, err := col.Find(ctx, bson.M{"type": "FFA"})
	for cur.Next(ctx) {
		var m Match
		err := cur.Decode(&m)
		if err != nil {
			log.Printf("[ERROR] failed to collect data: %s", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		matches = append(matches, m)
	}

	if err := cur.Err(); err != nil {
		log.Printf("[ERROR] failed to collect data: %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	if err != nil {
		log.Printf("[ERROR] failed to collect data: %s", err)
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
