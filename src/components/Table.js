import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/action';

import './Table.css';
import { bindActionCreators } from 'redux';
// sort by rank and price
export const Table = (props) => {
  
  const [sort, setSort] = useState();

  
  
  
  return (
    <div className='Table-container'>
      <table className='Table'>
        <thead className='Table-head'>
          <tr>
            <th>Remove button</th>
            <th>Cryptocurrency</th>
            <th>
              CMC <i className='fas fa-arrow-down'></i>
            </th>
            <th>Symbol</th>
            <th>
              Price <i className='fas fa-arrow-down'></i>
            </th>
          </tr>
        </thead>
        <tbody className='Table-body'>
          {/* add mapping of data */}
          {!props.data ? (
            // update styling
            <>loading</>
          ) : (
            props.data.map((val) => {
              return (
                <tr key={val.id} >
                  <td className='Remove-button'>
                    <i
                      onClick={() => props.actions.moveCoinToDropdown(val)}
                      className='far fa-trash-alt'></i>
                  </td>
                  <td>
                    <span className='Table-format'>
                      {/* Name  */}
                      {val.name}
                    </span>
                  </td>
                  <td>
                    <span className='Table-format'>
                      {/* CMC  */}
                      {val.rank}
                    </span>
                  </td>
                  <td>
                    <span className='Table-format'>
                      {/* symbol  */}
                      {val.symbol}
                    </span>
                  </td>
                  <td>
                    <span className='Table-format'>
                      {/* price  */}
                      {val.price}
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    data: state.tableData,
  };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
