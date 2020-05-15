/**
 * @class CryptoDataServices
 * @description functions to fetch crypto data
 */

// Modules
import axios from 'axios';

export default class CryptoDataServices {
  getData() {
    const request = {
      url: 'https://www.stackadapt.com/coinmarketcap/map',
    };
    return axios(request);
  }

  getCryptoPrice(data) {
    const request = {
      url: 'https://www.stackadapt.com/coinmarketcap/quotes',
      params: { id: data },
    };
    return axios(request);
  }
}
