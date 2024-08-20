import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPokemon } from '../store';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Dropdown = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemon.data);
  const pokemonStatus = useSelector((state) => state.pokemon.status);

  const nameList = pokemonData.map((mon) => (mon.name))
  //const nameList = ['bulbasaur', 'ivysaur', 'venusaur', 'charmander', 'charmeleon', 'charizard'];

  useEffect(() => {
      // Fetch data for the first 10 Pokémon
      for (let id = 1; id <= 10; id++) {
          dispatch(fetchPokemon(id));
      }
      console.log(pokemonData);
  }, [dispatch]);

  return (
    <>
    <Autocomplete
      disablePortal
      id="pokemon-list"
      options={nameList}
      sx={{ width: '40%', minWidth: 300, maxWidth: 400 }}
      renderInput={(params) => <TextField {...params} label="Choose a Pokemon"/>}
/>
    </>
  )
}

export default Dropdown;