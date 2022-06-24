import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      names:[]
    }
  }

  componentDidMount() {
    const names = this.props.names;
  }

  render() {
    const pokemans = [
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
      <Autocomplete
        disablePortal
        id="pokemon-list"
        options={this.state.names}
        sx={{ width: '40%', minWidth: 300, maxWidth: 400 }}
        renderInput={(params) => <TextField {...params} label="Choose a Pokemon"/>}
      />
    );
  }
}
  
