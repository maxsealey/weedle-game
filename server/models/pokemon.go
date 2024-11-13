package models

// Contains totality of data needed
type Pokemon struct {
	Name        string   `json:"name"`
	DexNum      int      `json:"dexnum"`
	Generation  int      `json:"gen"`
	TypeOne     Types    `json:"type1"`
	TypeTwo     Types    `json:"type2"`
	EggGroupOne EggGroup `json:"egg1"`
	EggGroupTwo EggGroup `json:"egg2"`
	Color       string   `json:"color"`
}

// Contains number, name, and types from
// https://pokeapi.co/api/v2/pokemon-species
type PokemonBasicInfo struct {
	DexNum int `json:"id"`

	Species struct {
		Name string `json:"name"`
	} `json:"species"`

	TypeList []Types `json:"types"`
}

type Types struct {
	Type TypeInfo `json:"type"`
}

type TypeInfo struct {
	Name string `json:"name"`
}

// Contains egg group and color from
// https://pokeapi.co/api/v2/pokemon/
type PokemonSpeciesInfo struct {
	EggGroups []EggGroup `json:"egg_groups"`

	Color struct {
		Name string `json:"name"`
	} `json:"color"`
}

type EggGroup struct {
	Name string `json:"name"`
}

type NationalDexTotal struct {
	Count int `json:"count"`
}

// Contains list of all names
type Results struct {
	Names []struct {
		Name string `json:"name"`
	} `json:"results"`
}

type PokemonListResponse struct {
	ID   int    `json:"ID"`
	Name string `json:"Name"`
}
