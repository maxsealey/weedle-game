package main

import (
	"server/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	//var pokemon models.Pokemon
	router := gin.Default()

	config := cors.Config{
		AllowOrigins: []string{"http://localhost:3000"},
	}
	router.Use(cors.New(config))

	router.GET("/api/pokemon/names", handlers.GetPokemonNames)

	router.GET("/api/pokemon/:id", handlers.GetPokemonByID)

	router.GET("/api/pokemon/total", handlers.GetNatDexMax)

	// start server
	router.Run("localhost:8080")
}
