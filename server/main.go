package main

import (
	"fmt"
	"server/services"
)

func main() {
	//var pokemon models.Pokemon

	pokemon := services.ExecuteConcurrentAPICalls()

	fmt.Printf("Name: %s\n", pokemon.Name)
	fmt.Printf("Dex Number: %d\n", pokemon.DexNum)
	fmt.Printf("Generation: %d\n", pokemon.Generation)
	fmt.Printf("Types: %s, %s\n", pokemon.Types[0].Type.Name, pokemon.Types[1].Type.Name)
	fmt.Printf("Egg Groups: %s, %s\n", pokemon.EggGroups[0].Name, pokemon.EggGroups[1].Name)
	fmt.Printf("Color: %s\n", pokemon.Color)

}
