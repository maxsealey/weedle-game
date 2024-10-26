package models

// Contains totality of data needed
type Pokemon struct {
	Name       string
	DexNum     int
	Generation int
	Types      []Types
	EggGroups  []EggGroup
	Color      string
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
	Slot int      `json:"slot"`
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
