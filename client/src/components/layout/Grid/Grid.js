import React from 'react';
import './grid.scss'

const Grid = ({ choices, cells }) => {
  const categories = ['Name', 'Dex #','Gen.','Types', 'Color']

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
          {choices.map((pokemon, index) => {
            const comparison = cells[index];

            return (
              <tr key={index}>
                <td className="text-center" style={{ backgroundColor: comparison.nameColor }}>
                  {pokemon.name}
                </td>
                <td className="text-center" style={{ backgroundColor: comparison.dexColor }}>
                  {pokemon.dex + " " + comparison.dexDirection}
                </td>
                <td className="text-center" style={{ backgroundColor: comparison.genColor }}>
                  {pokemon.gen}
                </td>
                <td className="text-center" style={{ backgroundColor: comparison.typesColor }}>
                  {`${pokemon.type1}, ${pokemon.type2}`}
                </td>
                <td className="text-center" style={{ backgroundColor: comparison.colorColor }}>
                  {pokemon.color}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Grid;