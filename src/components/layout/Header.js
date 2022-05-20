import React, { Component } from 'react'
import '../../App.css'

export default class Header extends Component {
  
  render() {
    const navStyle = {height:'60px', display:'flex', justifyContent:'space-around', position:'absolute'}
    const linkStyle = {color:'black', textDecoration:'none',cursor:'pointer'}

    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-md fixed-top' style={navStyle}>
          {/* This will contain link to instructions pop up, 
          share your score, share via email, text, or social medis*/}
        </nav>
      </React.Fragment>
    )
  }
}
