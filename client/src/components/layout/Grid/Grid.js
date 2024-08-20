import React, { Component, useState } from 'react';
import './grid.scss'

export default class Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      guesses: this.props.guesses,
      categories : ['Name', 'Pokedex #','Gen','Type 1','Type 2', 'Weight(lbs)', 'Evo. Stage'],
      choice : {
        // will contain object created by Pokemon class
      }
    }
  }
  render() {

    return (
      <div className='table-contain'>
        <table className="table">
          <thead>
            <tr>
              {this.state.categories.map(cat => <th className='text-center headeritems'>{cat}</th>)}
            </tr>
          </thead>
          <tbody>
            <tr>
              
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
