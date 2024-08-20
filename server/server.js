const express = require('express');
const axios = require('axios');


const app = express();

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

const getGeneration = (dexNum) => {
  if (dexNum <= 151) return 1;
  if (dexNum <= 251) return 2;
  if (dexNum <= 386) return 3;
  if (dexNum <= 493) return 4;
  if (dexNum <= 649) return 5;
  if (dexNum <= 721) return 6;
  if (dexNum <= 809) return 7;
  if (dexNum <= 905) return 8;
  if (dexNum <= 1025) return 9;
  return 8;
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
