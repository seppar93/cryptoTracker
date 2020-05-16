// Actions
import {
  FETCH_CRYPTO_PENDING,
  FETCH_CRYPTO_SUCCESS,
  FETCH_CRYPTO_ERROR,
} from '../actions/action';

// Redux State
const initialState = {
  pending: false,
  tableData: [],
  dropDownData: [],
  error: null,
};

const reducers = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case FETCH_CRYPTO_PENDING:
      newState.pending = true;

      return newState;

    case FETCH_CRYPTO_SUCCESS:
      newState.pending = false;
      newState.tableData = action.payload.slice(0, 5);
      newState.dropDownData = action.payload.slice(6,11);
      // console.log("NEW STATE",newState);
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
};
export default reducers;
