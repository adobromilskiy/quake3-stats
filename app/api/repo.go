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

func (r *MatchRepository) getPlayers() (res []Player, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Aggregate(r.Ctx, []bson.M{
		{"$match": bson.M{"type": "FFA"}},
		{"$unwind": "$players"},
		{"$group": bson.M{
			"_id": "$players.name",
			"score": bson.M{
				"$sum": "$players.score",
			},
			"kills": bson.M{
				"$sum": "$players.kills",
			},
			"deaths": bson.M{
				"$sum": "$players.deaths",
			},
			"suicides": bson.M{
				"$sum": "$players.suicides",
			},
			"damage_given": bson.M{
				"$sum": "$players.damage_given",
			},
			"damage_taken": bson.M{
				"$sum": "$players.damage_taken",
			},
			"health_total": bson.M{
				"$sum": "$players.health_total",
			},
			"armor_total": bson.M{
				"$sum": "$players.armor_total",
			},
		}},
	})

	if err != nil {
		return nil, err
	}

	for cur.Next(r.Ctx) {
		var p Player
		err = cur.Decode(&p)
		if err != nil {
			return nil, err
		}
		res = append(res, p)
	}

	if err = cur.Err(); err != nil {
		return nil, err
	}

	return res, nil

}

func (r *MatchRepository) getTotalDuration() (res DayDuration, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Aggregate(r.Ctx, []bson.M{
		{"$match": bson.M{"type": "FFA"}},
		{"$group": bson.M{
			"_id": nil,
			"duration": bson.M{
				"$sum": "$duration",
			},
		}},
	})

	if err != nil {
		return 0, err
	}

	type tmp struct {
		Duration DayDuration `bson:"duration"`
	}

	var count []tmp

	if err = cur.All(r.Ctx, &count); err != nil {
		return 0, err
	}

	return count[0].Duration, nil
}

func (r *MatchRepository) getTotalMatches() (res int, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Aggregate(r.Ctx, []bson.M{
		{"$match": bson.M{"type": "FFA"}},
		{"$group": bson.M{
			"_id": nil,
			"count": bson.M{
				"$sum": 1,
			},
		}},
	})

	if err != nil {
		return 0, err
	}

	type tmp struct {
		Count int `bson:"count"`
	}

	var count []tmp

	if err = cur.All(r.Ctx, &count); err != nil {
		return 0, err
	}

	return count[0].Count, nil
}
