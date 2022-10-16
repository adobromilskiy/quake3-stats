package api

import (
	"context"
	"net/http"
	"net/http/httptest"
	"testing"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func TestFAAtotalsHandler(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/ffa", nil)
	w := httptest.NewRecorder()
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()
	client, _ := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
	db := client.Database("quake3")

	srv := Server{
		Port:     ":8080",
		Database: db,
	}
	srv.getFAAtotals(w, req)
	res := w.Result()
	defer res.Body.Close()
	if res.StatusCode != http.StatusOK {
		t.Errorf("expected status OK; got %v", res.Status)
	}
}

func TestFAAplayersHandler(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/ffa/players", nil)
	w := httptest.NewRecorder()
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()
	client, _ := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
	db := client.Database("quake3")

	srv := Server{
		Port:     ":8080",
		Database: db,
	}
	srv.getFAAplayers(w, req)
	res := w.Result()
	defer res.Body.Close()
	if res.StatusCode != http.StatusOK {
		t.Errorf("expected status OK; got %v", res.Status)
	}
}

func TestFAAmatchesHandler(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/ffa/matches", nil)
	w := httptest.NewRecorder()
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()
	client, _ := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
	db := client.Database("quake3")

	srv := Server{
		Port:     ":8080",
		Database: db,
	}
	srv.getFAAmatches(w, req)
	res := w.Result()
	defer res.Body.Close()
	if res.StatusCode != http.StatusOK {
		t.Errorf("expected status OK; got %v", res.Status)
	}
}

func TestFAAlogssHandler(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/api/ffa/logs", nil)
	w := httptest.NewRecorder()
	ctx, cancel := context.WithTimeout(context.Background(), 3*time.Second)
	defer cancel()
	client, _ := mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
	db := client.Database("quake3")

	srv := Server{
		Port:     ":8080",
		Database: db,
	}
	srv.getFAAlogs(w, req)
	res := w.Result()
	defer res.Body.Close()
	if res.StatusCode != http.StatusOK {
		t.Errorf("expected status OK; got %v", res.Status)
	}
}
