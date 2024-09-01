import React, { useEffect } from 'react'
import Dropdown from '../../Dropdown'
import Grid from '../Grid/Grid'
import './dashboard.scss'

const Dashboard = (props) => {

  useEffect(() => {
    document.body.style.overflow = "auto";  
    return () => {
      document.body.style.overflow = "hidden";
    }
  }, [])

  return (
    <div className="col">

      <div className="row">
        <a href="#"><h1 class="text-center maintitle">Weedle</h1></a>
      </div>

      <div className="row">
        <h4 class="text-center subtitle">Daily Pokémon Guessing Game</h4>
      </div>

      <div className="row">
        <h6 class="text-center guess-text">{props.guesses} out of 8 Guesses</h6>
      </div>

      <div className="row contentContain content">
        <Dropdown/>
      </div>

      <div className="row content">
        <Grid/>
      </div>
    </div>
)
}

export default Dashboard;

