import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Dropdown() {
  return (
    <Autocomplete
      disablePortal
      id="pokemon-list"
      options={pokemans}
      sx={{ width: 350 }}
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
    label:"Ivysaur",
    dexNum:2,
    gen:1,
    type:["grass","poison"],
    evoStage:2,
    eggGroup:["monster","grass"]
  },
  {
    label:"Venusaur",
    dexNum:3,
    gen:1,
    type:["grass","poison"],
    evoStage:3,
    eggGroup:["monster","grass"]
  }
]
