import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

const Dropdown = (props) => {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemonNames() {
      try {
        const response = await axios.get('http://localhost:8080/api/pokemon/names');
        const namesArray = response.data.map(pokemon => pokemon.ID + "# " + pokemon.Name.charAt(0).toUpperCase() + pokemon.Name.slice(1));
        setPokemonNames(namesArray);
      } catch (error) {
        console.error("Error fetching Pokémon names:", error);
        setError("Failed to fetch Pokémon names.");
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonNames();
  }, []);

  const handleChange = (e, pokeSelection) => {
    if (pokeSelection) {
      props.onSelectionChange(pokeSelection);
    }
  };

  return (
    <>
    <Autocomplete
      disablePortal
      id="pokemon-list"
      options={pokemonNames}
      sx={{ width: '40%', minWidth: 300, maxWidth: 400 }}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Choose a Pokemon"/>}
/>
    </>
  )
}

export default Dropdown;