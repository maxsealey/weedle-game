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

	router.GET("/target", func(c *gin.Context) {

	})

	router.POST("/target", func(c *gin.Context) {

	})

	router.GET("/fetch", func(c *gin.Context) {

	})

	// start server
	router.Run("localhost:8080")
}
