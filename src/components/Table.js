import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Table.css'
// sort by rank and price
export const Table = () => {
  return (
    <div className='Table-container'>
      <table className='Table'>
        <thead className='Table-head'>
          <tr>
            <th>remove button</th>
            <th>Cryptocurrency</th>
            <th>CMC</th>
            <th>symbol</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody className='Table-body'>
          {/* add mapping of data */}
          <tr>
            <td className='Remove-button'>
              <i class='far fa-trash-alt'></i>
            </td>
            <td>
              <span className='Table-format'>{/* CMC  */}TEST</span>
            </td>
            <td>
              <span className='Table-format'>{/* CMC  */}TEST</span>
            </td>
            <td>
              <span className='Table-format'>{/* symbol  */}TEST</span>
            </td>
            <td>
              <span className='Table-format'>{/* price  */}TEST</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)
