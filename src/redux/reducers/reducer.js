// Actions
import {
  FETCH_CRYPTO_PENDING,
  FETCH_CRYPTO_SUCCESS,
  FETCH_CRYPTO_ERROR,
  FETCH_CRYPTO_PRICE_ERROR,
  TRANSFER_COIN_TO_TABLE,
  TRANSFER_COIN_TO_DROPDOWN,
} from '../actions/action';

// Redux State
const initialState = {
  pending: false,
  tableData: new Map(),
  dropDownData: new Map(),
  error: null,
};

const reducers = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    // FETCHING CRYPTO CURRENCY
    case FETCH_CRYPTO_PENDING:
      newState.pending = true;

      return newState;

    case FETCH_CRYPTO_SUCCESS:
      // setting data
      newState.tableData = new Map();
      newState.dropDownData = new Map();
      newState.pending = false;
      // separating 5 coins between table and dropdown
      const displayedInDropdown = action.payload.slice(5, 10);
      const displayedInTable = action.payload.slice(0, 5);

      // setting data in maps
      displayedInTable.map((value) =>
        newState.tableData.set(value.symbol, value)
      );
      displayedInDropdown.map((value) =>
        newState.dropDownData.set(value.symbol, value)
      );

      return newState;

    case FETCH_CRYPTO_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_CRYPTO_PRICE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    // TRANSFER COIN FROM TABLE DROPDOWN
    case TRANSFER_COIN_TO_TABLE:
      // console.log('STATE',newState.dropDownData);
      // console.log('PAYLOAD',action.payload.symbol);

      newState.dropDownData.delete(action.payload.symbol);
      newState.tableData.set(action.payload.symbol, action.payload);
      // console.log(newState);
      // console.log(state);

      return newState;

    default:
      return state;
  }
};
export default reducers;
