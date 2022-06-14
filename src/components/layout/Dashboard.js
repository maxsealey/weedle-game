import React, { Component } from 'react'
import Dropdown from '../Dropdown'
import Grid from '../Grid'
import axios from 'axios'
import './dashboard.scss'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
        url: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
        pokemon: null, // stores retrieved data,
        guesses:0,
    }
  }

  async componentDidMount() {
      const res = await axios.get(this.state.url)
      this.setState({ pokemon: res.data['results'] })
  } // asynchronously gets data from pokeapi

  render() {
    const titleStyle = {color:'#ffcb05', paddingTop:'10px', fontSize:'70px', fontFamily:'Pokemon Solid', letterSpacing:'4px', textShadow:"3px 0 0 #3466af, -3px 0 0 #3466af, 0 3px 0 #3466af, 0 -3px 0 #3466af, 2px 2px #3466af, -2px -2px 0 #3466af, 2px -2px 0 #3466af, -2px 2px 0 #3466af"}
    const subStyle = {color:'#ffcb05',fontWeight:'bold', textShadow:"2px 0 0 #3466af, -2px 0 0 #3466af, 0 2px 0 #3466af, 0 -2px 0 #3466af, 1px 1px #3466af, -1px -1px 0 #3466af, 1px -1px 0 #3466af, -1px 1px 0 #3466af", fontFamily:'Pokemon Solid',letterSpacing:'4px'}
    const contentStyle = {width:'100%', marginTop:'1em', display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'auto'}

    return (
      <React.Fragment>
        <div className="col">
          <div className="row">
            <a href="#"><h1 class="text-center" style={titleStyle}>Weedle</h1></a>
          </div>
          <div className="row">
            <h4 class="text-center" style={subStyle}>Daily Pokémon Guessing Game</h4>
          </div>
          <div className="row">
            <h6 class="text-center" style={{fontFamily:'Allerta',color:'#3466af',fontWeight:'bold'}}>{this.state.guesses} out of 8 Guesses</h6>
          </div>
          <div className="row contentContain" style={contentStyle}>
            <Dropdown/>
          </div>
          <div className="row tableContain" style={contentStyle}>
            <Grid key={this.state.guesses} guessCount={this.state.guesses}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
