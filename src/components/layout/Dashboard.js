import React, { Component } from 'react'
import Dropdown from '../Dropdown'
import axios from 'axios'
import '../../App.css'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
        url: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",
        pokemon: null // stores retrieved data
    }
  }

  async componentDidMount() {
      const res = await axios.get(this.state.url)
      this.setState({ pokemon: res.data['results'] })
  } // asynchronously gets data from pokeapi

  render() {
    const titleStyle = {color:'#ffcb05', paddingTop:'10px', fontSize:'70px', fontFamily:'Pokemon Solid', letterSpacing:'4px', textShadow:"3px 0 0 #3466af, -3px 0 0 #3466af, 0 3px 0 #3466af, 0 -3px 0 #3466af, 2px 2px #3466af, -2px -2px 0 #3466af, 2px -2px 0 #3466af, -2px 2px 0 #3466af"}
    const subStyle = {color:'#3466af',fontWeight:'bold', textShadow:"1px 1px 1px #000000", fontFamily:'Allerta'}
    const contentStyle = {width:'100%', marginTop:'2em', display: 'flex', alignItems: 'center', justifyContent: 'center'}

    return (
      <React.Fragment>
        <div className="col">
          <div className="row">
            <a href="#"><h1 class="text-center" style={titleStyle}>Weedle</h1></a>
          </div>
          <div className="row">
            <h3 class="text-center" style={subStyle}>Daily Pokemon Guessing Game</h3>
          </div>
          <div className="row contentContain" style={contentStyle}>
              <Dropdown/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
