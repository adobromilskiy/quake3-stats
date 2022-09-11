package api

import (
	"fmt"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type (
	Match struct {
		ID       primitive.ObjectID `json:"id" bson:"_id"`
		Map      string             `json:"map"`
		Type     string             `json:"type"`
		Duration int                `json:"duration"`
		Datetime string             `json:"datetime"`
		Players  []Player           `json:"players"`
	}

	Player struct {
		Name     string   `json:"name"`
		Stats    []Stat   `json:"stats"`
		Weapons  []Weapon `json:"weapons"`
		Items    []Item   `json:"items"`
		Powerups []Item   `json:"powerups"`
	}

	Stat struct {
		Name  string `json:"name"`
		Value int    `json:"value"`
	}

	Weapon struct {
		Name  string `json:"name"`
		Hits  int    `json:"hits"`
		Shots int    `json:"shots"`
		Kills int    `json:"kills"`
	}

	Item struct {
		Name    string `json:"name"`
		Pickups int    `json:"pickups"`
		Time    int    `json:"time"`
	}

	FFAResponse struct {
		TotalGames int    `json:"total_games"`
		Duration   string `json:"duration"`
	}

	DayDuration int
)

// based on day work time
func (d DayDuration) String() string {
	days := d / 28800
	h := d / 3600 % 8
	m := (d % 3600) / 60
	s := (d % 3600) % 60

	return fmt.Sprintf("%dd %dh %dm %ds", days, h, m, s)
}
