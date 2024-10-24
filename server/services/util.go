package services

func ConvertGenStringToInt(gen string) int {
	switch gen {
	case "generation-i":
		return 1
	case "generation-ii":
		return 2
	case "generation-iii":
		return 3
	case "generation-iv":
		return 4
	case "generation-v":
		return 5
	case "generation-vi":
		return 6
	case "generation-vii":
		return 7
	case "generation-viii":
		return 8
	case "generation-ix":
		return 9
	default:
		return 0 // error, invalid input
	}
}
