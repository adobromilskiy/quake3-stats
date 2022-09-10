package api

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

type Server struct {
	Port       int
	httpServer *http.Server
}

func (s *Server) Run() {
	s.httpServer = &http.Server{
		Addr:    fmt.Sprintf("localhost:%d", s.Port),
		Handler: s.routes(),
	}

	err := s.httpServer.ListenAndServe()
	if err != nil {
		log.Printf("[ERROR] http server terminated, %s", err)
	}
}

func (s *Server) routes() *http.ServeMux {
	mux := http.NewServeMux()
	mux.HandleFunc("/", s.getInfo)

	return mux
}

func (s *Server) getInfo(w http.ResponseWriter, r *http.Request) {
	_, _ = io.WriteString(w, "Hello world!\n")
}
