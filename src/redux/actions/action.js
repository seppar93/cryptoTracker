// Action types

export const FETCH_CRYPTO_PENDING = 'FETCH_CRYPTO_PENDING';
export const FETCH_CRYPTO_SUCCESS = 'FETCH_CRYPTO_SUCCESS';
export const FETCH_CRYPTO_ERROR = 'FETCH_CRYPTO_ERROR';

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


