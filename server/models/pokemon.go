package models

type Pokemon struct {
	Name     string  `json:"name"`
	DexNum   int     `json:"id"`
	Gen      int     `json:"generation"`
	Types    []Type  `json:"types"`
	Height   float32 `json:"height"`
	EvoStage int     `json:""`
}

type Types struct {
	Slot int      `json:"slot"`
	Type TypeInfo `json:"type"`
}

type TypeInfo struct {
	Name string `json:"name"`
}
