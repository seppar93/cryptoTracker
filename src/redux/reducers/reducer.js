// Actions
import {
  FETCH_CRYPTO_PENDING,
  FETCH_CRYPTO_SUCCESS,
  FETCH_CRYPTO_ERROR,
} from '../actions/action';

// Redux State
const initialState = {
  pending: false,
  data: new Map(),
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
      const cryptoData = action.payload.slice(0, 10);
      newState.data = new Map();

      cryptoData.map((val) => {
        newState.data.set(val.id, val);
      });
      console.log(newState);

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
