// Actions
import {FETCH_CRYPTO_PENDING,FETCH_CRYPTO_SUCCESS, FETCH_CRYPTO_ERROR } from '../actions/action'

// Redux State
const initialState = {
  pending: false,
  data: new Map(), 
  error: null
}

const reducers = (state = initialState, action) => {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case FETCH_CRYPTO_PENDING:
      return {
        ...state,
        pending: true,
      };

    case FETCH_CRYPTO_SUCCESS:
      newState.pending = false;
      newState.users = new Map();
      action.payload.map((val, index) => {
        newState.users.set(val.symbol, val);
      });
      return newState;

    case FETCH_CRYPTO_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}
export default reducers;