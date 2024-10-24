package models

type Pokemon struct {
	DexNum    int
	Name      string
	Types     []Types
	EggGroups []EggGroup
	Color     string
}

// pokemon
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

// pokemon
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
