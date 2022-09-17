package api

import (
	"fmt"
)

type (
	DayDuration int

	Player struct {
		Name        string `json:"name" bson:"_id"`
		Score       int    `json:"score" bson:"score"`
		Kills       uint   `json:"kills" bson:"kills"`
		Deaths      uint   `json:"deaths" bson:"deaths"`
		Suicides    uint   `json:"suicides" bson:"suicides"`
		DamageGiven uint   `json:"damage_given" bson:"damage_given"`
		DamageTaken uint   `json:"damage_taken" bson:"damage_taken"`
		HealtTotal  uint   `json:"health_total" bson:"health_total"`
		ArmorTotal  uint   `json:"armor_total" bson:"armor_total"`
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
