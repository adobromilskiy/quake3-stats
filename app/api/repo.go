package api

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type MatchRepository struct {
	Ctx context.Context
	DB  *mongo.Database
}

func (r *MatchRepository) getAll() (matches []Match, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Find(r.Ctx, bson.M{"type": "FFA"})
	if err != nil {
		return nil, err
	}

	for cur.Next(r.Ctx) {
		var m Match
		err = cur.Decode(&m)
		if err != nil {
			return nil, err
		}
		matches = append(matches, m)
	}

	if err = cur.Err(); err != nil {
		return nil, err
	}

	return matches, nil
}
