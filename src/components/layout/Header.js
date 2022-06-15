import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import {faShare} from '@fortawesome/free-solid-svg-icons'
import '../../style/layout/header.scss'



export default class Header extends Component {
  
  render() {
    const navStyle = {height:'60px', display:'flex', justifyContent:'space-around', position:'absolute'}
    const iconStyle={color:'#646464', marginRight:'20px', height:'30px',width:'30px',cursor:'pointer'}

    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-md fixed-top' style={navStyle}>
          <div style={{ margin:'auto', marginLeft:'20px' }}>
            <FontAwesomeIcon icon={faCircleQuestion} style={iconStyle} class="faicon" />
            <FontAwesomeIcon icon={faGear} style={iconStyle} class="faicon" />
            <FontAwesomeIcon icon={faShare} style={iconStyle} class="faicon" />
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
