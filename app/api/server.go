package api

import (
	"fmt"
	"io"
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
		log.Printf("[ERROR] http server terminated, %s", err)
	}
}

func (s *Server) routes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/totalmatches", s.getInfo)

	return mux
}

func (s *Server) getInfo(w http.ResponseWriter, r *http.Request) {
	col := s.Database.Collection("matches")

	totalGames, err := col.CountDocuments(r.Context(), bson.M{"type": "FFA"})

	if err != nil {
		log.Printf("[ERROR] getting total games, %s", err)
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	string := fmt.Sprintf("Total games: %d", totalGames)

	_, _ = io.WriteString(w, string)
}
