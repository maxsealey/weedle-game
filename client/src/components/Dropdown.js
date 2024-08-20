import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Dropdown = () => {
  const [pokemonNameList, setPokemonNameList] = useState([]);

  useEffect(()=>{
    const fetchNames = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/pokemon-species")
        setPokemonNameList(res.data)
      } catch(e){
        console.error("Failed to get list of names", e)
      }
    }

    fetchNames()
  }, [])

  return (
    <>
    <Autocomplete
      disablePortal
      id="pokemon-list"
      options={pokemonNameList}
      sx={{ width: '40%', minWidth: 300, maxWidth: 400 }}
      renderInput={(params) => <TextField {...params} label="Choose a Pokemon"/>}
/>
    </>
  )
}

export default Dropdown;