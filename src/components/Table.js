// Modules
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Actions
import * as actions from '../redux/actions/action';

// Styling
import './Table.css';

// Components 
import Loading from './Loading'

export const Table = (props) => {
  return (
    <div className='Table-container'>
      <table className='Table'>
        <thead className='Table-head'>
          <tr>
            <th>Remove button</th>
            <th>Cryptocurrency</th>
            <th onClick={() => props.actions.sortCoinOrder('rank')}>CMC <i className='fas fa-arrow-down'></i></th>
            <th>Symbol</th>
            <th onClick={() => props.actions.sortCoinOrder('price')}>Price <i className='fas fa-arrow-down'></i></th>
          </tr>
        </thead>
        {/* add mapping of data */}
        {!props.data ? (
          <Loading/>
        ) : (
          props.data.map((val) => {
            return (
              <tbody key={val.id} className='Table-body'>
                <tr>
                  <td className='Remove-button'>
                    <i
                      onClick={() => props.actions.moveCoinToDropdown(val)}
                      className='far fa-trash-alt'></i>
                  </td>
                  <td>
                    <span className='Table-format'>{val.name}</span>
                  </td>
                  <td>
                    <span className='Table-format'>{val.rank}</span>
                  </td>
                  <td>
                    <span className='Table-format'>{val.symbol}</span>
                  </td>
                  <td>
                    <span className='Table-format'>{val.price}</span>
                  </td>
                </tr>
              </tbody>
            );
          })
        )
        }
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
