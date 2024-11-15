import React, { useEffect, useState } from 'react'
import Dropdown from '../../Dropdown'
import Grid from '../Grid/Grid'
import Pokemon from '../../../models/Pokemon'
import { generateRandomPokemon, fetchDexMax } from '../../../helpers/utility'
import './dashboard.scss'

const Dashboard = () => {
  const [guesses, setGuesses] = useState(0);
  const [selections, setSelections] = useState([]); // array of pokemon objects passed in to the grid
  const [target, setTarget] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "auto";  
    return () => {
      document.body.style.overflow = "hidden";
    }
  }, []); // hides phantom scroll bar

  useEffect(() => {
    const fetchTarget = async () => {
      const newTarget = await generateRandomPokemon();
      setTarget(newTarget);
    }

    fetchTarget();
  }, []); // generate and store randomly generated pokemon on page open

  useEffect(() => {
    if (target) {
      console.log('Target updated:', target);
    }
  }, [target]); // log new target; for debugging

  // Handler for updating selection array and # of guesses when dropdown
  const handleSelectionChange = (newSelection) => {
    setSelections((prevSelections) => [...prevSelections, newSelection]);
    setGuesses((prevGuesses) => prevGuesses + 1);
  }; 

  // Handler for randomize button
  async function handleRandomize() {
    const newTarget = await generateRandomPokemon();
    setTarget(newTarget);
    console.log("Random: " + JSON.stringify(newTarget));
  };

  return (
    <div className="col">

      <div className="row">
        <a href="#"><h1 className="text-center maintitle">Weedle</h1></a>
      </div>

      <div className="row">
        <h4 className="text-center subtitle">Daily Pokémon Guessing Game</h4>
      </div>

      <div className="row">
        <h6 className="text-center guess-text">{guesses.toString()} out of 8 Guesses</h6>
      </div>

      <div className="row contentContain content">
        <Dropdown onSelectionChange={handleSelectionChange}/>
      </div>

      <div className="row content">
        <Grid choices={selections} />
        <button className="randomize" onClick={handleRandomize}>Randomize</button>
      </div>
    </div>
);
};

export default Dashboard;
