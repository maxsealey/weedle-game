const express = require('express');
const axios = require('axios');

const app = express();

import { getGeneration } from '../client/src/helpers/Util';

const getPokemonData = async (id) => {
  try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const pokemon = res.data;
      return {
          name: pokemon.name,
          dexNumber: pokemon.id,
          generation: getGeneration(pokemon.id),
          primaryType: pokemon.types[0].type.name,
          secondaryType: pokemon.types[1] ? pokemon.types[1].type.name : null,
          height: pokemon.height,
      };
  } catch (error) {
      console.error(`Error fetching data for Pokemon ID: ${id}`, error);
      return null;
  }
};

app.get('/api/pokemon/:id', async (req, res) => {
    const id = req.params.id;
    const pokemonData = await getPokemonData(id);
    if (pokemonData) {
        res.json(pokemonData);
    } else {
        res.status(404).send('Pokemon not found');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
