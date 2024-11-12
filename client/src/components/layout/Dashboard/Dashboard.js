import React, { useEffect, useState } from 'react'
import Dropdown from '../../Dropdown'
import Grid from '../Grid/Grid'
import Pokemon from '../../../models/Pokemon'
import './dashboard.scss'

const Dashboard = () => {
  const [guesses, setGuesses] = useState(0)
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    document.body.style.overflow = "auto";  
    return () => {
      document.body.style.overflow = "hidden";
    }
  }, [])

  const handleSelectionChange = (newSelection) => {
    setSelections((prevSelections) => [...prevSelections, newSelection]);
    setGuesses((prevGuesses) => prevGuesses + 1);
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
        <button className="randomize">Randomize</button>
      </div>
    </div>
)
}

export default Dashboard;

