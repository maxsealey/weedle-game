import React, { useState } from 'react';
import './grid.scss'

const Grid = (props) => {
  const [choices, setChoices] = useState([])

  const categories = ['Name', 'Dex #','Gen.','Types', 'Egg Groups', 'Color']

  return (
    <div className='table-contain'>
      <table className="table">
        <thead>
          <tr>
          {categories.map((cat, index) => (
              <th key={index} className="text-center headeritems">{cat}</th>
            ))}
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

export default Grid;