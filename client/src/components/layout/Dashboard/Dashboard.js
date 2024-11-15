import React, { useEffect, useState } from 'react'
import Dropdown from '../../Dropdown'
import Grid from '../Grid/Grid'
import Pokemon from '../../../models/Pokemon'
import { generateRandomPokemon} from '../../../helpers/utility'
import comparePokemon from '../../../helpers/comparePokemon'
import './dashboard.scss'

const Dashboard = () => {
  const [guesses, setGuesses] = useState(0);
  const [selections, setSelections] = useState([]); // array of pokemon objects passed in to the grid
  const [cellColors, setCellColors] = useState([]); // array of ComparisonResult objects
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
    const comparison = comparePokemon(target, newSelection)
    setSelections((prevSelections) => [...prevSelections, newSelection]);
    setGuesses((prevGuesses) => prevGuesses + 1);
    setCellColors((prevComparisons)=> [...prevComparisons, comparison])
  }; 

  // Handler for randomize button
  async function handleRandomize() {
    const newTarget = await generateRandomPokemon();
    setTarget(newTarget);
    setSelections([]);
    setCellColors([]);
    setGuesses(0)
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
        <Grid choices={selections} cells={cellColors} />
        <button className="randomize" onClick={handleRandomize}>Randomize</button>
      </div>
    </div>
);
};

export default Dashboard;
