package api

import (
	"fmt"
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type (
	DayDuration int

	Match struct {
		ID       primitive.ObjectID `json:"id" bson:"_id"`
		Map      string             `json:"map" bson:"map"`
		Type     string             `json:"type" bson:"type"`
		Duration uint               `json:"duration" bson:"duration"`
		Datetime string             `json:"datetime" bson:"datetime"`
		Players  []struct {
			Name        string `json:"name" bson:"name"`
			Score       int    `json:"score" bson:"score"`
			Kills       uint   `json:"kills" bson:"kills"`
			Deaths      uint   `json:"deaths" bson:"deaths"`
			Suicides    uint   `json:"suicides" bson:"suicides"`
			DamageGiven uint   `json:"damage_given" bson:"damage_given"`
			DamageTaken uint   `json:"damage_taken" bson:"damage_taken"`
			HealtTotal  uint   `json:"health_total" bson:"health_total"`
			ArmorTotal  uint   `json:"armor_total" bson:"armor_total"`
			Weapons     []struct {
				Name  string `json:"name" bson:"name"`
				Hits  uint   `json:"hits" bson:"hits"`
				Shots uint   `json:"shots" bson:"shots"`
				Kills uint   `json:"kills" bson:"kills"`
			} `json:"weapons" bson:"weapons"`
			Items []struct {
				Name    string `json:"name" bson:"name"`
				Pickups uint   `json:"pickups" bson:"pickups"`
			} `json:"items" bson:"items"`
			Powerups []struct {
				Name    string `json:"name" bson:"name"`
				Pickups uint   `json:"pickups" bson:"pickups"`
				Time    uint   `json:"time" bson:"time"`
			} `json:"powerups" bson:"powerups"`
		} `json:"players" bson:"players"`
	}

	Player struct {
		Name        string   `json:"name" bson:"_id"`
		Games       int      `json:"games" bson:"games"`
		Score       int      `json:"score" bson:"score"`
		Kills       uint     `json:"kills" bson:"kills"`
		Deaths      uint     `json:"deaths" bson:"deaths"`
		Suicides    uint     `json:"suicides" bson:"suicides"`
		DamageGiven uint     `json:"damage_given" bson:"damage_given"`
		DamageTaken uint     `json:"damage_taken" bson:"damage_taken"`
		HealtTotal  uint     `json:"health_total" bson:"health_total"`
		ArmorTotal  uint     `json:"armor_total" bson:"armor_total"`
		Weapons     []Weapon `json:"weapons" bson:"weapons"`
		Items       []Item   `json:"items" bson:"items"`
		Powerups    []Item   `json:"powerups,omitempty" bson:"powerups,omitempty"`
	}

	Weapon struct {
		Name  string `json:"name" bson:"_id"`
		Hits  uint   `json:"hits" bson:"hits"`
		Shots uint   `json:"shots" bson:"shots"`
		Kills uint   `json:"kills" bson:"kills"`
	}

	Item struct {
		Name    string `json:"name" bson:"_id"`
		Pickups uint   `json:"pickups" bson:"pickups"`
		Time    uint   `json:"time,omitempty" bson:"time,omitempty"`
	}

	Winner struct {
		Name string `json:"name" bson:"_id"`
		Wins int    `json:"wins" bson:"wins"`
	}

	MapWinner struct {
		Name string `json:"name" bson:"playername"`
		Wins int    `json:"wins" bson:"wins"`
	}

	Map struct {
		Name    string      `json:"name" bson:"_id"`
		Winners []MapWinner `json:"winners" bson:"winners"`
	}

	Gamelog struct {
		ID    primitive.ObjectID `json:"id" bson:"_id"`
		Kills []Kill             `json:"kills" bson:"kills"`
		Date  time.Time          `json:"date" bson:"date"`
	}

	Kill struct {
		Killer string `json:"killer" bson:"killer"`
		Victim string `json:"victim" bson:"victim"`
	}
)

// based on day work time
func (d DayDuration) String() string {
	days := d / 28800
	h := d / 3600 % 8
	m := (d % 3600) / 60
	s := (d % 3600) % 60

	return fmt.Sprintf("%dd %dh %dm %ds", days, h, m, s)
}
