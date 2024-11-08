import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import {faGear} from '@fortawesome/free-solid-svg-icons'
import {faShare} from '@fortawesome/free-solid-svg-icons'
import './header.scss'



export default class Header extends Component {
  
  render() {
    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-md fixed-top'>
          <div className='icon-contain'>
            <FontAwesomeIcon icon={faCircleQuestion} className="faicon" />
            <FontAwesomeIcon icon={faGear} className="faicon" />
            <FontAwesomeIcon icon={faShare} className="faicon" />
          </div>
        </nav>
      </React.Fragment>
    )
  }
}
