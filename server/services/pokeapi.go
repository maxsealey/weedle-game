package services

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"server/models"
	"sync"
)

func FetchNatDexMax() int {
	url := "https://pokeapi.co/api/v2/pokemon-species"

	var dexMax models.NationalDexTotal

	res, err := http.Get(url)

	if res != nil {
		defer res.Body.Close()
	}

	if err != nil {
		fmt.Println("Error making request:", err)
		return 0
	}

	body, err := io.ReadAll(res.Body)

	if err != nil {
		fmt.Println("Error reading body:", err)
		return 0
	}

	err = json.Unmarshal(body, &dexMax)

	if err != nil {
		fmt.Println("Error unmarshaling JSON:", err)
		return 0
	}

	return dexMax.Count
}

func FetchBasicInfo(dex int, ch chan<- models.PokemonBasicInfo, wg *sync.WaitGroup) {
	url := "https://pokeapi.co/api/v2/pokemon/"
	var pokemon models.PokemonBasicInfo

	defer wg.Done()
	res, err := http.Get(fmt.Sprintf("%s%d", url, dex))

	if res != nil {
		defer res.Body.Close()
	}

	if err != nil {
		fmt.Println("Error making request:", err)
		close(ch)
		return
	}

	body, err := io.ReadAll(res.Body)

	if err != nil {
		fmt.Println("Error reading body:", err)
		close(ch)
		return
	}

	err = json.Unmarshal(body, &pokemon)
	if err != nil {
		fmt.Println("Error unmarshaling JSON:", err)
		close(ch) // Close channel on error
		return
	}

	// Send the fetched data back to the main goroutine
	ch <- pokemon

}

func FetchSpeciesInfo(dex int, ch chan<- models.PokemonSpeciesInfo, wg *sync.WaitGroup) {
	url := "https://pokeapi.co/api/v2/pokemon-species/"
	var pokemon models.PokemonSpeciesInfo

	defer wg.Done()
	res, err := http.Get(fmt.Sprintf("%s%d", url, dex))

	if res != nil {
		defer res.Body.Close()
	}

	if err != nil {
		fmt.Println("Error making request:", err)
		close(ch)
		return
	}

	body, err := io.ReadAll(res.Body)

	if err != nil {
		fmt.Println("Error reading body:", err)
		close(ch)
		return
	}

	err = json.Unmarshal(body, &pokemon)

	if err != nil {
		fmt.Println("Error unmarshaling JSON:", err)
		close(ch) // Close channel on error
		return
	}

	// Send the fetched data back to the main goroutine
	ch <- pokemon
}

func CompilePokemonInfo(basic models.PokemonBasicInfo, addition models.PokemonSpeciesInfo) models.Pokemon {
	var compiled models.Pokemon

	compiled.DexNum = basic.DexNum
	compiled.Name = basic.Species.Name
	compiled.Types = basic.TypeList
	compiled.EggGroups = addition.EggGroups
	compiled.Color = addition.Color.Name

	return compiled
}
