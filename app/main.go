package main

import (
	"context"
	"log"
	"os"

	"github.com/adobromilskiy/quake3-stats/app/api"
	"github.com/jessevdk/go-flags"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var opts struct {
	DbConn string `long:"dbconn" description:"database connection" required:"true"`
	DbName string `long:"dbname" description:"database name" default:"quake3"`
	Port   string `long:"port" description:"port to listen" default:":8080"`
}

func main() {
	if _, err := flags.Parse(&opts); err != nil {
		os.Exit(1)
	}

	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(opts.DbConn))
	if err != nil {
		log.Printf("[ERROR] can not connect to database: %v", err)
		os.Exit(1)
	}
	db := client.Database(opts.DbName)

	srv := api.Server{
		Port:     opts.Port,
		Database: db,
	}
	srv.Run()
}
