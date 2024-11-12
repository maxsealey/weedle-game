import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import Pokemon from '../models/Pokemon';

const Dropdown = ({ onSelectionChange }) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleSelect = (event, newValue) => {
    if (newValue) {
      const test = new Pokemon("Bulbasaur", 1, 1, ["Grass", "Poison"], ["Grass", "Monster"], "Green")
      onSelectionChange(test);
      setSelectedPokemon(null);
      setInputValue('');
    }
  };

  useEffect(() => {
    async function fetchPokemonNames() {
      const response = await axios.get('http://localhost:8080/api/pokemon/names');
      const namesArray = response.data.map(pokemon => pokemon.ID + ") " + pokemon.Name.charAt(0).toUpperCase() + pokemon.Name.slice(1));
      setPokemonNames(namesArray);
      setSelectedPokemon(null);
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
      value={selectedPokemon}
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