package main

import (
	"server/handlers"

	"github.com/gin-gonic/gin"
)

func main() {
	//var pokemon models.Pokemon
	router := gin.Default()

	router.GET("/api/pokemon/names", handlers.GetPokemonNames)

	/*router.GET("/api/pokemon/:target", func(c *gin.Context) {

	})

	router.GET("/api/pokemon/:fetch", func(c *gin.Context) {

	})
	*/
	// start server
	router.Run("localhost:8080")
}
