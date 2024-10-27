package services

import (
	"server/models"
	"sync"
)

/*
***************************************************
NEEDS TO BE UPDATED WITH EACH NEW GENERATION
***************************************************
*/
func getGeneration(dex int) int {
	switch {
	case dex >= 1 && dex <= 151:
		return 1
	case dex >= 152 && dex <= 251:
		return 2
	case dex >= 252 && dex <= 386:
		return 3
	case dex >= 387 && dex <= 493:
		return 4
	case dex >= 494 && dex <= 649:
		return 5
	case dex >= 650 && dex <= 721:
		return 6
	case dex >= 722 && dex <= 809:
		return 7
	case dex >= 810 && dex <= 905:
		return 8
	case dex >= 906:
		return 9
	default:
		return 0
	}
}

// Compiles information fetched from both pages and calls getGeneration()
func CompilePokemonInfo(basic models.PokemonBasicInfo, species models.PokemonSpeciesInfo) models.Pokemon {
	var compiled models.Pokemon
	var temp1 models.Types
	var temp2 models.EggGroup

	temp1.Type.Name = "N/A"
	temp2.Name = "N/A"

	compiled.Name = basic.Species.Name
	compiled.DexNum = basic.DexNum
	compiled.Generation = getGeneration(basic.DexNum)
	compiled.EggGroups = species.EggGroups
	compiled.Color = species.Color.Name

	// Avoids errors for pokemon with one type
	compiled.Types = append(compiled.Types, basic.TypeList[0])
	if len(compiled.Types) > 1 {
		compiled.Types = append(compiled.Types, basic.TypeList[1])
	} else {
		compiled.Types = append(compiled.Types, temp1)
	}

	// Avoids errors for pokemon with one egg group
	compiled.EggGroups = append(compiled.EggGroups, species.EggGroups[0])
	if len(species.EggGroups) > 1 {
		species.EggGroups = append(species.EggGroups, species.EggGroups[1])
	} else {
		species.EggGroups = append(species.EggGroups, temp2)
	}

	return compiled
}

// Returns list of all species names and their id
func ExtractElements(data models.Results) []models.PokemonListResponse {
	list := make([]models.PokemonListResponse, len(data.Names))
	for i, result := range data.Names {
		list[i] = models.PokemonListResponse{
			ID:   i + 1,
			Name: result.Name,
		}
	}
	return list
}

// runs goroutines to retrieve both halves of a pokemons total data
func ExecuteConcurrentAPICalls(dex int) models.Pokemon {
	basicInfoCh := make(chan models.PokemonBasicInfo, dex)
	speciesInfoCh := make(chan models.PokemonSpeciesInfo, dex)

	var wg sync.WaitGroup
	wg.Add(2)

	go FetchBasicInfo(dex, basicInfoCh, &wg)
	go FetchSpeciesInfo(dex, speciesInfoCh, &wg)

	wg.Wait()

	basicInfo := <-basicInfoCh
	speciesInfo := <-speciesInfoCh

	completePokemon := CompilePokemonInfo(basicInfo, speciesInfo)

	return completePokemon
}
