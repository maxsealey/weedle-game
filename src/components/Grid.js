import React, { Component } from 'react'

export default class Grid extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories : ['#','Name','Gen.','Primary','Secondary','Evo','Egg Group'],
      choice : {
        // will contain object created by Pokemon class
      }
    }
  }
  render() {
    return (
      <table className="table" style={{width:'100%', marginLeft:'1em'}}>
        <thead>
          <tr>
            {
              this.state.categories ? (
                this.state.categories.map(cat => <th scope="col" className='text-center'>{cat}</th>)
              ) : <></>
            }
          </tr>
        </thead>
        <tbody>
          <tr>
          </tr>
          <tr>
          </tr>
        </tbody>
      </table>
    )
  }
}
