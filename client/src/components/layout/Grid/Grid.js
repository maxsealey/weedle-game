import React, { useEffect, useState } from 'react';
import './grid.scss'

const Grid = ({ choices }) => {
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
          {choices.map((pokemon, index) => (
              <tr key={index}>
                <td className="text-center">{pokemon.name}</td>
                <td className="text-center">{pokemon.dex}</td>
                <td className="text-center">{pokemon.gen}</td>
                <td className="text-center">{pokemon.types.join(', ')}</td>
                <td className="text-center">{pokemon.eggGroups.join(', ')}</td>
                <td className="text-center">{pokemon.color}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Grid;