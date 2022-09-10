package main

import (
	"os"

	"github.com/adobromilskiy/quake3-stats/app/api"
	"github.com/jessevdk/go-flags"
)

var opts struct {
	DbConn string `long:"dbconn" description:"database connection" required:"true"`
	DbName string `long:"dbname" description:"database name" default:"quake3"`
	Port   int    `long:"port" description:"port to listen" default:"8080"`
}

func main() {
	if _, err := flags.Parse(&opts); err != nil {
		os.Exit(1)
	}

	srv := api.Server{
		Port: opts.Port,
	}
	srv.Run()
}
