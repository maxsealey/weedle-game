package services

import (
	"server/models"
	"strings"
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
	var noneType models.Types
	var noneEgg models.EggGroup

	noneType.Type.Name = "N/A"
	noneEgg.Name = "N/A"

	compiled.Name = strings.ToUpper(string(basic.Species.Name[0])) + strings.ToLower(basic.Species.Name[1:])
	compiled.DexNum = basic.DexNum
	compiled.Generation = getGeneration(basic.DexNum)
	compiled.Color = strings.ToUpper(string(species.Color.Name[0])) + strings.ToLower(species.Color.Name[1:])
	if len(basic.TypeList) > 0 {
		compiled.TypeOne = capitalizeType(basic.TypeList[0])
	} else {
		compiled.TypeOne = noneType
	}

	if len(basic.TypeList) > 1 {
		compiled.TypeTwo = capitalizeType(basic.TypeList[1])
	} else {
		compiled.TypeTwo = noneType
	}

	if len(species.EggGroups) > 0 {
		compiled.EggGroupOne = capitalizeEggGroup(species.EggGroups[0])
	} else {
		compiled.EggGroupOne = noneEgg
	}

	if len(species.EggGroups) > 1 {
		compiled.EggGroupTwo = capitalizeEggGroup(species.EggGroups[1])
	} else {
		compiled.EggGroupTwo = noneEgg
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

// Helper function to capitalize the type name
func capitalizeType(t models.Types) models.Types {
	t.Type.Name = strings.ToUpper(string(t.Type.Name[0])) + strings.ToLower(t.Type.Name[1:])
	return t
}

// Helper function to capitalize the egg group name
func capitalizeEggGroup(e models.EggGroup) models.EggGroup {
	e.Name = strings.ToUpper(string(e.Name[0])) + strings.ToLower(e.Name[1:])
	return e
}
