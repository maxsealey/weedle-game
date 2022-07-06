import React, { Component } from 'react'
import Dropdown from '../Dropdown'
import Grid from '../Grid'
import axios from 'axios'
import '../../style/layout/dashboard.scss'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
        url: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
        pokemon: null, // stores retrieved data,
        names:null,
        guesses:0,
    }
  }

  async componentDidMount() {
      const res = await axios.get(this.state.url)
      this.setState({ pokemon: res.data['results'] })
  } // asynchronously gets data from pokeapi

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    )
  }
}
