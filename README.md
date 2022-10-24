# quake3-stats
[![build](https://github.com/adobromilskiy/quake3-stats/actions/workflows/ci-build.yml/badge.svg)](https://github.com/adobromilskiy/quake3-stats/actions/workflows/ci-build.yml) [![Go Report Card](https://goreportcard.com/badge/github.com/adobromilskiy/quake3-stats)](https://goreportcard.com/report/github.com/adobromilskiy/quake3-stats)

Web application to show results of quake3 matches.

### Application parameters

Required parameters has no default value.

| Parameter | Default | Description |
|-----------|---------|-------------|
| port   | `:8080`   | port to listen |
| dbconn |          | database connection string |
| dbname | `quake3` | database name |


### Quick start

```console
docker run -tid -p 8080:8080 --network mongo_network \
	--restart always --name quake3-stats \
	adobromilskiy/quake3-stats:latest \
	--dbconn=mongodb://mongohost:27017 --dbname=quake3 --port=:8080
```

API endpoints:

**GET:** /api/ffa - get ffa summary such as total games, maps and winners.

**GET:** /api/ffa/matches?page=2&perpage=20 - get last ffa mathes with pagination.

**GET** /api/ffa/players - get list of players with detailed summary.

**GET** /api/ffa/logs?page=2&perpage=20 - get logs of matches.

Before use this stack you need to import into mongodb data from *xml files. You can use [quake3-importer](https://github.com/adobromilskiy/quake3-importer) for it.

Before use this stack you need to import into mongodb data from qconsole.log file. You can use [quake3-logcatcher](https://github.com/adobromilskiy/quake3-logcatcher) for it.

Frontend for stats app located in nginx directory. You can use it as example for your own frontend.