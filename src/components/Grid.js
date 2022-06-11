import React, { Component } from 'react'

export default class Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      guesses: this.props.guesses,
      categories : ['#','Name','Gen.','Primary','Secondary','Evo','Egg Group'],
      choice : {
        // will contain object created by Pokemon class
      }
    }
  }
  render() {
    const textStyle = {
      fontSize:'10px'
    }

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
      },
      {
        label:"Squirtle",
        dexNum:7,
        gen:1,
        type:["water"],
        evoStage:1,
        eggGroup:["monster","water 1"]
      }
    ]

    return (
      <table className="table" style={{width:'100%', marginLeft:'0.5em'}}>
        <thead className='thead-dark'>
          <tr>
            {
              this.state.categories ? (
                this.state.categories.map(cat => <th scope="col" className='text-center' style={textStyle}>{cat}</th>)
              ) : <></>
            }
          </tr>
        </thead>
        <tbody>
          {

          }
        </tbody>
      </table>
    )
  }
}
