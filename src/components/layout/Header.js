import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import {faShare} from '@fortawesome/free-solid-svg-icons'
import '../../App.css'

export default class Header extends Component {
  
  render() {
    const navStyle = {height:'60px', display:'flex', justifyContent:'space-around', position:'absolute'}
    //const linkStyle = {color:'black', textDecoration:'none',cursor:'pointer'}
    const iconStyle={color:'black', marginRight:'20px', height:'30px',width:'30px'}

    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-md fixed-top' style={navStyle}>
          <div style={{ margin:'auto', marginLeft:'20px' }}>
            <FontAwesomeIcon icon={faCircleQuestion} style={iconStyle} />
            <FontAwesomeIcon icon={faGear} style={iconStyle} />
            <FontAwesomeIcon icon={faShare} style={iconStyle} />
          </div>
          <div>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
