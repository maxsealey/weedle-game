package handlers

import (
	"net/http"
	"server/models"
	"server/services"

	"strconv"

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

func GetPokemonByID(c *gin.Context) {
	id := c.Param("id")

	idInt, err := strconv.Atoi(id)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid Pokémon ID"})
		return
	}

	pokemonData := services.ExecuteConcurrentAPICalls(idInt)

	if pokemonData == (models.Pokemon{}) {
		c.JSON(http.StatusNotFound, gin.H{"error": "Pokémon not found"})
		return
	}

	c.JSON(http.StatusOK, pokemonData)
}

func GetNatDexMax(c *gin.Context) {
	max := services.FetchNatDexMax()
	c.JSON(http.StatusOK, max)
}
