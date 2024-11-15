import ComparisonResults from "../models/ComparisonResults";

// Returns object with names and colors for background of each cell
export default function comparePokemon(target, selection) {
    const targetTypes = [target.type1, target.type2]
    const targetEgg = [target.eggGroup1, target.eggGroup2]

    const GREEN = "LIGHTGREEN", YELLOW = "YELLOW", GREY = "LIGHTGREY", UP = "↑", DOWN = "↓"

    let nameColor = GREY, dexColor = GREY, genColor = GREY, typesColor = GREY, eggsColor = GREY, colorColor = GREY
    let dexDirection = ""

    // return if guess is correct, else set direction
    if (target.dex === selection.dex) {
        return new ComparisonResults(target.name, selection.name, GREEN, GREEN, GREEN, GREEN, GREEN, GREEN)
    } else if (target.dex > selection.dex) {
        dexDirection = UP
    } else {
        dexDirection = DOWN
    }

    // check dex numbers
    if (Math.abs(target.dex - selection.dex) <= 50) {
        dexColor = YELLOW
    }

    // check generation numbers
    if(target.gen === selection.gen){
        genColor = GREEN
    } else if(Math.abs(target.gen - selection.gen) <= 1){
        genColor = YELLOW
    }

    // check types
    if(targetTypes.includes(selection.type1) && targetTypes.includes(selection.type2)){
        typesColor = GREEN
    } else if (targetTypes.includes(selection.type1) || targetTypes.includes(selection.type2)) {
        typesColor = YELLOW
    }

    // check eggGroups
    if(targetEgg.includes(selection.eggGroup1) && targetEgg.includes(selection.eggGroup2)){
        eggsColor = GREEN
    } else if (targetEgg.includes(selection.eggGroup1) || targetEgg.includes(selection.eggGroup2)) {
        eggsColor = YELLOW
    }

    // check colors
    if(target.color === selection.color){
        colorColor = GREEN
    }

    return new ComparisonResults(target.name, selection.name, nameColor, dexColor, genColor, typesColor, eggsColor, colorColor, dexDirection)
}

