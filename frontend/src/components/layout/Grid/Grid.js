import React, { Component } from 'react'
import './grid.scss'

export default class Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      guesses: this.props.guesses,
      categories : ['Pokedex #','Name','Generation','Type 1','Type 2','Evo Stage'],
      choice : {
        // will contain object created by Pokemon class
      }
    }
  }
  render() {
    const testPokemanGuesses  = [
      {
        label:"Bulbasaur",
        dexNum:1,
        gen:1,
        type:["grass","poison"],
        evoStage:1,
        eggGroup:["monster","grass"]
      },
      {
        label:"Charmander",
        dexNum:4,
        gen:1,
        type:["fire"],
        evoStage:1,
        eggGroup:["monster","dragon"]
      }
    ]

    return (
      <div className='table-contain'>
        <table className="table">
          <thead>
            <tr>
              {this.state.categories.map(cat => <th className='text-center headeritems'>{cat}</th>)}
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    )
  }
}
