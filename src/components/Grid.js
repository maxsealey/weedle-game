import React, { Component } from 'react'

export default class Grid extends Component {
  render() {
    return (
      <table className="table" style={{maxWidth:'85%'}}>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Dex #</th>
            <th scope="col">Gen</th>
            <th scope="col">Primary</th>
            <th scope="col">Second</th>
            <th scope="col">Evo</th>
            <th scope="col">Egg Group</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>row</td>
            <td>row</td>
            <td>row</td>
            <td>row</td>
            <td>row</td>
            <td>row</td>
            <td>row</td>
          </tr>
          <tr>
            <td>row</td>
            <td>row</td>
            <td>row</td>
            <td>row</td>
            <td>row</td>
            <td>row</td>
            <td>row</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
