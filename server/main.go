package main

import (
	"fmt"
	"server/models"
	"server/services"
	"sync"
)

func main() {
	dex := 1

	basicInfoCh := make(chan models.PokemonBasicInfo)
	speciesInfoCh := make(chan models.PokemonSpeciesInfo)

	var wg sync.WaitGroup
	wg.Add(2)

	go services.FetchBasicInfo(dex, basicInfoCh, &wg)
	go services.FetchSpeciesInfo(dex, speciesInfoCh, &wg)

	wg.Wait()

	var basicInfo models.PokemonBasicInfo
	var speciesInfo models.PokemonSpeciesInfo

	select {
	case basicInfo = <-basicInfoCh:
		// Successfully received basic info
		fmt.Println("Basic info received")
	default:
		fmt.Println("No basic info received")
	}

	select {
	case speciesInfo = <-speciesInfoCh:
		// Successfully received species info
		fmt.Println("Species info received")
	default:
		fmt.Println("No species info received")
	}

	completePokemon := services.CompilePokemonInfo(basicInfo, speciesInfo)
	fmt.Printf("Dex Number: %d\n", completePokemon.DexNum)
	fmt.Printf("Name: %s\n", completePokemon.Name)
	fmt.Printf("Color: %s\n", speciesInfo.Color)

	// Close channels after goroutines finish
	close(basicInfoCh)
	close(speciesInfoCh)
}
