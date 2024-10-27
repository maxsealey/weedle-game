package services

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"server/models"
	"sync"
)

// Fetches the current number of entries in the national dex, returns it
func FetchNatDexMax() int {
	url := "https://pokeapi.co/api/v2/pokemon-species"

	var dexMax models.NationalDexTotal

	// GET
	res, err := http.Get(url)
	if res != nil {
		defer res.Body.Close()
	}
	if err != nil {
		fmt.Println("Error making request:", err)
		return 0
	}

	// Read
	body, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Println("Error reading body:", err)
		return 0
	}

	// Unmarshal
	err = json.Unmarshal(body, &dexMax)
	if err != nil {
		fmt.Println("Error unmarshaling JSON:", err)
		return 0
	}

	return dexMax.Count
}

// Fetches Pokemon dex number (even though redundant), name, types
func FetchBasicInfo(dex int, ch chan<- models.PokemonBasicInfo, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("Fetching Basic Info")
	url := "https://pokeapi.co/api/v2/pokemon/"
	var pokemon models.PokemonBasicInfo

	// GET
	res, err := http.Get(fmt.Sprintf("%s%d", url, dex))

	if res != nil {
		defer res.Body.Close()
	}
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}

	// Read
	body, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Println("Error reading body:", err)
		return
	}

	// Unmarshal
	err = json.Unmarshal(body, &pokemon)
	if err != nil {
		fmt.Println("Error unmarshaling JSON:", err)
		return
	}

	ch <- pokemon

}

// Fetches Egg Groups and color
func FetchSpeciesInfo(dex int, ch chan<- models.PokemonSpeciesInfo, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println("Fetching Species Info")
	url := "https://pokeapi.co/api/v2/pokemon-species/"
	var pokemon models.PokemonSpeciesInfo

	res, err := http.Get(fmt.Sprintf("%s%d", url, dex))

	if res != nil {
		defer res.Body.Close()
	}
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}

	body, err := io.ReadAll(res.Body)

	if err != nil {
		fmt.Println("Error reading body:", err)
		return
	}

	err = json.Unmarshal(body, &pokemon)

	if err != nil {
		fmt.Println("Error unmarshaling JSON:", err)
		return
	}

	ch <- pokemon
}

// Gets full list of names and ids to be converted into json
func FetchNameList() []models.PokemonListResponse {
	url := "https://pokeapi.co/api/v2/pokemon-species?limit=100000&offset=0"

	var results models.Results

	// GET
	res, err := http.Get(url)
	if res != nil {
		defer res.Body.Close()
	}
	if err != nil {
		fmt.Println("Error making request:", err)
		return nil
	}

	// Read
	body, err := io.ReadAll(res.Body)
	if err != nil {
		fmt.Println("Error reading body:", err)
		return nil
	}

	// Unmarshal
	err = json.Unmarshal(body, &results)
	if err != nil {
		fmt.Println("Error unmarshaling JSON:", err)
		return nil
	}

	list := ExtractElements(results)
	return list

}
