// Helper functions
import Pokemon from "../models/Pokemon";
import axios from 'axios';

// Takes string formatted for dropdown options "1) Pokemon", get the int and return
export function getIdFromString(formattedString){
    const id = formattedString.split(")")[0];
    return parseInt(id, 10);
};

// Generates random pokemon and returns
export async function generateRandomPokemon() {
    // const dexMax = await fetchDexMax()
    const dexMax = 649
    /**
     * 
     * 
     * DEXMAX IS BEING MODIFIED HERE TO MAKE IT GENS 1-5 ONLY
     * 
     * 
     */

    const id = Math.floor(Math.random() * dexMax) + 1;
    console.log(`Fetching Pokémon with ID: ${id}`);
  
    try {
      const response = await axios.get(`http://localhost:8080/api/pokemon/${id}`);
  
      if (response.data) {
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
        return pokemon;
      } else {
        console.error('API did not return data for Pokémon');
        return null;
      }
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      return null; 
    }
  }

// Gets total number of pokemon from backend and returns
export async function fetchDexMax() {
    const response = await axios.get('http://localhost:8080/api/pokemon/total');
    return response.data
  }