// Action types

export const FETCH_CRYPTO_PENDING = 'FETCH_CRYPTO_PENDING';
export const FETCH_CRYPTO_SUCCESS = 'FETCH_CRYPTO_SUCCESS';
export const FETCH_CRYPTO_ERROR = 'FETCH_CRYPTO_ERROR';

export const FETCH_CRYPTO_PRICE_PENDING = 'FETCH_CRYPTO_PRICE_PENDING';
export const FETCH_CRYPTO_PRICE_SUCCESS = 'FETCH_CRYPTO_PRICE_SUCCESS';
export const FETCH_CRYPTO_PRICE_ERROR = 'FETCH_CRYPTO_PRICE_ERROR';


export const TRANSFER_COIN_TO_TABLE = 'TRANSFER_COIN_TO_TABLE';
export const TRANSFER_COIN_TO_DROPDOWN = 'TRANSFER_COIN_TO_DROPDOWN';

export function fetchCryptoDataPending() {
  return {
    type: FETCH_CRYPTO_PENDING,
  };
}

export function fetchCryptoDataSuccess(data) {
  return {
    type: FETCH_CRYPTO_SUCCESS,
    payload: data
  };
}

export function fetchCryptoDataError(error) {
  return {
    type: FETCH_CRYPTO_ERROR,
    error: error
  };
}


export function fetchCryptoPricePending() {
  return {
    type: FETCH_CRYPTO_PENDING,
  };
}

export function fetchCryptoPriceSuccess(data) {
  return {
    type: FETCH_CRYPTO_SUCCESS,
    payload: data,
  };
}

export function fetchCryptoPriceError(error) {
  return {
    type: FETCH_CRYPTO_ERROR,
    error: error,
  };
}


export function moveCoinToTable(data) {
  return {
    type: TRANSFER_COIN_TO_TABLE,
    payload: data,
  };
}
export function moveCoinToDropdown(data) {
  return {
    type: TRANSFER_COIN_TO_DROPDOWN,
    payload: data,
  };
}
