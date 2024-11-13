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
                <td className="text-center name">{pokemon.name}</td>
                <td className="text-center dexnum">{pokemon.dex}</td>
                <td className="text-center gen">{pokemon.gen}</td>
                <td className="text-center types">{`${pokemon.type1}, ${pokemon.type2}`}</td>
                <td className="text-center eggs">{`${pokemon.eggGroup1}, ${pokemon.eggGroup2}`}</td>
                <td className="text-center color">{pokemon.color}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Grid;