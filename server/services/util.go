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
func CompilePokemonInfo(basic models.PokemonBasicInfo, addition models.PokemonSpeciesInfo) models.Pokemon {
	var compiled models.Pokemon
	var temp models.Types

	temp.Slot = 2 // to avoid off by one error
	temp.Type.Name = "None"

	compiled.Name = basic.Species.Name
	compiled.DexNum = basic.DexNum
	compiled.Generation = getGeneration(basic.DexNum)
	compiled.EggGroups = addition.EggGroups
	compiled.Color = addition.Color.Name

	compiled.Types = append(compiled.Types, basic.TypeList[0])
	if len(compiled.Types) > 1 {
		compiled.Types = append(compiled.Types, basic.TypeList[1])
	} else {
		compiled.Types = append(compiled.Types, temp)
	}

	return compiled
}

// Returns list of all species names
func ExtractNames(data models.Results) []string {
	var names []string
	for _, result := range data.Names {
		names = append(names, result.Name)
	}
	return names
}

func ExecuteConcurrentAPICalls() models.Pokemon {
	dex := 742
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
