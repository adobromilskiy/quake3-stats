package api

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
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
			"games": bson.M{
				"$sum": 1,
			},
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
		{"$sort": bson.M{
			"score": -1,
		}},
	})

	if err != nil {
		return nil, err
	}

	if err = cur.All(r.Ctx, &res); err != nil {
		return res, err
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

	if len(count) == 0 {
		return 0, nil
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

	if len(count) == 0 {
		return 0, nil
	}

	return count[0].Count, nil
}

func (r *MatchRepository) getPlayerWeapons(mtype, player string) (res []Weapon, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Aggregate(r.Ctx, []bson.M{
		{"$match": bson.M{"type": mtype}},
		{"$unwind": "$players"},
		{"$match": bson.M{"players.name": player}},
		{"$unwind": "$players.weapons"},
		{"$group": bson.M{
			"_id": "$players.weapons.name",
			"shots": bson.M{
				"$sum": "$players.weapons.shots",
			},
			"hits": bson.M{
				"$sum": "$players.weapons.hits",
			},
			"kills": bson.M{
				"$sum": "$players.weapons.kills",
			},
		}},
		{"$sort": bson.M{
			"kills": -1,
		}},
	})

	if err != nil {
		return nil, err
	}

	if err = cur.All(r.Ctx, &res); err != nil {
		return res, err
	}

	return res, nil
}

func (r *MatchRepository) getPlayerItems(mtype, player string) (res []Item, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Aggregate(r.Ctx, []bson.M{
		{"$match": bson.M{"type": mtype}},
		{"$unwind": "$players"},
		{"$match": bson.M{"players.name": player}},
		{"$unwind": "$players.items"},
		{"$group": bson.M{
			"_id": "$players.items.name",
			"pickups": bson.M{
				"$sum": "$players.items.pickups",
			},
		}},
		{"$sort": bson.M{
			"pickups": -1,
		}},
	})

	if err != nil {
		return nil, err
	}

	if err = cur.All(r.Ctx, &res); err != nil {
		return res, err
	}

	return res, nil
}

func (r *MatchRepository) getPlayerPowerups(mtype, player string) (res []Item, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Aggregate(r.Ctx, []bson.M{
		{"$match": bson.M{"type": mtype}},
		{"$unwind": "$players"},
		{"$match": bson.M{"players.name": player}},
		{"$unwind": "$players.powerups"},
		{"$group": bson.M{
			"_id": "$players.powerups.name",
			"pickups": bson.M{
				"$sum": "$players.powerups.pickups",
			},
			"time": bson.M{
				"$sum": "$players.powerups.time",
			},
		}},
		{"$sort": bson.M{
			"pickups": -1,
		}},
	})

	if err != nil {
		return nil, err
	}

	if err = cur.All(r.Ctx, &res); err != nil {
		return res, err
	}

	return res, nil
}

func (r *MatchRepository) getWinners(mtype string) (res []Winner, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Aggregate(r.Ctx, []bson.M{
		{"$match": bson.M{"type": mtype}},
		{"$unwind": "$players"},
		{"$sort": bson.M{"players.score": -1}},
		{"$group": bson.M{
			"_id": "$datetime",
			"score": bson.M{
				"$first": "$players.score",
			},
			"map": bson.M{
				"$first": "$map",
			},
			"playername": bson.M{
				"$first": "$players.name",
			},
		}},
		{"$group": bson.M{
			"_id": "$playername",
			"wins": bson.M{
				"$sum": 1,
			},
		}},
		{"$sort": bson.M{"wins": -1}},
	})

	if err != nil {
		return nil, err
	}

	if err = cur.All(r.Ctx, &res); err != nil {
		return res, err
	}

	return res, nil
}

func (r *MatchRepository) getMaps(mtype string) (res []Map, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Aggregate(r.Ctx, []bson.M{
		{"$match": bson.M{"type": mtype}},
		{"$unwind": "$players"},
		{"$sort": bson.M{"players.score": -1}},
		{"$group": bson.M{
			"_id": "$datetime",
			"score": bson.M{
				"$first": "$players.score",
			},
			"map": bson.M{
				"$first": "$map",
			},
			"playername": bson.M{
				"$first": "$players.name",
			},
		}},
		{"$group": bson.M{
			"_id": "$map",
			"winners": bson.M{
				"$accumulator": bson.M{
					"init":           "function() {return []}",
					"accumulate":     "function(state, player) {for (var i = 0; i < state.length; i++) {if (state[i].playername == player) {state[i].wins++;return state;}}state.push({ \"playername\": player, \"wins\": 1});return state;}",
					"accumulateArgs": bson.A{"$playername"},
					"merge":          "function(state, other) {for (var i = 0; i < other.length; i++) {for (var j = 0; j < state.length; j++) {if (state[j].playername == other[i].playername) {state[j].wins += other[i].wins;break;}state.push(other[i]);}}return state;}",
					"finalize":       "function(state) {state.sort(function(a, b) {return b.wins - a.wins;});return state;}",
					"lang":           "js",
				},
			},
		}},
		{"$sort": bson.M{"_id": 1}},
	})

	if err != nil {
		return nil, err
	}

	if err = cur.All(r.Ctx, &res); err != nil {
		return res, err
	}

	return res, nil
}

func (r *MatchRepository) getMatches(mtype string, limit, skip int) (res []Match, err error) {
	coll := r.DB.Collection("matches")
	var cur *mongo.Cursor

	cur, err = coll.Aggregate(r.Ctx, []bson.M{
		{"$match": bson.M{"type": mtype}},
		{"$sort": bson.M{"datetime": -1}},
		{"$limit": limit},
		{"$skip": skip},
	})

	if err != nil {
		return nil, err
	}

	if err = cur.All(r.Ctx, &res); err != nil {
		return res, err
	}

	return res, nil
}

func (r *MatchRepository) getLogs(limit, skip int) (res []Gamelog, err error) {
	coll := r.DB.Collection("logs")
	var cur *mongo.Cursor

	opts := options.Find()
	opts.SetSort(bson.D{{Key: "date", Value: -1}})
	opts.SetLimit(int64(limit))
	opts.SetSkip(int64(skip))

	cur, err = coll.Find(r.Ctx, bson.M{}, opts)

	if err != nil {
		return nil, err
	}

	if err = cur.All(r.Ctx, &res); err != nil {
		return res, err
	}

	return res, nil
}
