import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Dropdown() {
  return (
    <Autocomplete
      disablePortal
      id="pokemon-list"
      options={pokemans}
      sx={{ width: 400 }}
      renderInput={(params) => <TextField {...params} label="Choose a Pokemon"/>}
    />
  );
}

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
