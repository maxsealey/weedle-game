import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import Pokemon from '../models/Pokemon';
import {getIdFromString} from '../helpers/utility'

const Dropdown = ({ onSelectionChange }) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handler for dropdown selection, make new pokemon object and send back to dashboard
  const handleSelect = async (event, newValue) => {
    try {
      if (newValue) {
        const response = await axios.get(`http://localhost:8080/api/pokemon/${getIdFromString(newValue)}`);
        const pokemon = new Pokemon(
          response.data.name,
          response.data.dexnum,
          response.data.gen,
          response.data.type1.type.name,
          response.data.type2.type.name,
          response.data.egg1.name,
          response.data.egg2.name,
          response.data.color
        );
        onSelectionChange(pokemon);
        setInputValue('');
      } else {
        console.error('API did not return data');
      }
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };

  // fetches list of names and make list of options for dropdown
  useEffect(() => {
    async function fetchPokemonNames() {
      const response = await axios.get('http://localhost:8080/api/pokemon/names');
      const namesArray = response.data.map(pokemon => pokemon.ID + ") " + pokemon.Name.charAt(0).toUpperCase() + pokemon.Name.slice(1));
      setPokemonNames(namesArray);
    }

    fetchPokemonNames();
  }, []);

  return (
    <>
    <Autocomplete
      disablePortal
      id="pokemon-list"
      options={pokemonNames}
      sx={{ width: '40%', minWidth: 300, maxWidth: 400 }}
      onChange={handleSelect}
      value={null}
      inputValue={inputValue} 
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => <TextField {...params} label="Choose a Pokemon"/>}
      isOptionEqualToValue={(option, value) => option === value}
/>
    </>
  )
}

export default Dropdown;