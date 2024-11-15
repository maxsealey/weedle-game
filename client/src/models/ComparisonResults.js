// Model to hold colors for each cell of data
export default class ComparisonResults {
    constructor(targetName, selectionName, nameColor, dexColor, genColor, typesColor, eggsColor, colorColor, dexDirection=null){
        this.targetName = targetName
        this.selectionName = selectionName
        this.nameColor = nameColor
        this.dexColor = dexColor
        this.genColor = genColor
        this.typesColor = typesColor
        this.eggsColor = eggsColor
        this.colorColor = colorColor
        this.dexDirection = dexDirection // up or down
    }
}