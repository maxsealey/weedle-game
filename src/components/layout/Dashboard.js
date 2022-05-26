import React, { Component } from 'react'
import '../../App.css'

export default class Container extends Component {

  render() {
    const titleStyle = {color:'#f5403d', paddingTop:'10px', fontSize:'70px', fontFamily:'Pokemon Solid', textShadow:"3px 3px 6px rgba(0,0,0,0.34)"}
    const subStyle = {color:'#f5403d',fontWeight:'bold', textShadow:"3px 3px 6px rgba(0,0,0,0.34)"}

    return (
      <React.Fragment>
        <div className="container" style={{height:'85vh'}}>
            <h1 class="text-center" style={titleStyle}>Weedle</h1>
            <br/>
            <h3 class="text-center" style={subStyle}>Daily Pokemon Guessing Game</h3>
        </div>
      </React.Fragment>
    )
  }
}
