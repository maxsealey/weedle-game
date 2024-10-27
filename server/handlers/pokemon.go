package handlers

import (
	"net/http"
	"server/services"

	"github.com/gin-gonic/gin"
)

// Handler to get Pokémon names and ids
func GetPokemonNames(c *gin.Context) {
	pokemonList := services.FetchNameList()

	if pokemonList == nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch Pokémon names"})
		return
	}

	c.JSON(http.StatusOK, pokemonList)
}
