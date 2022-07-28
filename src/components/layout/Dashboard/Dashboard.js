import React, { Component } from 'react'
import Dropdown from '../../Dropdown'
import Grid from '../../Grid/Grid'
import './dashboard.scss'

export default class Dashboard extends Component {
  render() {
    return (
      <div className="col">
        <div className="row">
          <a href="#"><h1 class="text-center maintitle">Weedle</h1></a>
        </div>
        <div className="row">
          <h4 class="text-center subtitle">Daily Pokémon Guessing Game</h4>
        </div>
        <div className="row">
          <h6 class="text-center guess-text">{this.state.guesses} out of 8 Guesses</h6>
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
}

