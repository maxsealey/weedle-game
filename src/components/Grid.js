import React, { Component } from 'react'

export default class Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
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
      <table className="table table-striped" style={{width:'100%', marginLeft:'1em'}}>
        <thead className='thead-light'>
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
