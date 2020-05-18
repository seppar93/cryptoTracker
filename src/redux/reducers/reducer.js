// Actions
import {
  FETCH_CRYPTO_PENDING,
  FETCH_CRYPTO_SUCCESS,
  FETCH_CRYPTO_ERROR,
  FETCH_CRYPTO_PRICE_ERROR,
  TRANSFER_COIN_TO_TABLE,
  TRANSFER_COIN_TO_DROPDOWN,
  SORT_COIN_ORDER,
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
    // FETCHING CRYPTO CURRENCY
    case FETCH_CRYPTO_PENDING:
      newState.pending = true;

      return newState;

    case FETCH_CRYPTO_SUCCESS:
      // change status of pending
      newState.pending = false;
      // separating 5 coins between table and dropdown
      newState.tableData = action.payload.slice(5, 10);
      newState.dropDownData = action.payload.slice(0, 5);

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

    case TRANSFER_COIN_TO_DROPDOWN:
      if (newState.tableData.length > 1) {
        // condition to keep one coin in the table
        newState.tableData = [
          ...newState.tableData.filter((coin) => coin !== action.payload),
        ];
        newState.dropDownData = [...newState.dropDownData, action.payload];
      }

      return newState;

    // TRANSFER COIN FROM TABLE DROPDOWN
    case TRANSFER_COIN_TO_TABLE:
      newState.dropDownData = [
        ...newState.dropDownData.filter((coin) => coin !== action.payload),
      ];
      newState.tableData = [...newState.tableData, action.payload];

      return newState;

      // SORT COIN
    case SORT_COIN_ORDER:

      newState.tableData = [
        ...newState.tableData.sort(
          (a, b) => b[action.payload] - a[action.payload]
        ),
      ];

      return newState;

    default:
      return state;
  }
};
export default reducers;
