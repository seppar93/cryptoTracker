/**
 * @description redux configuration
 */

// Modules
import { createStore } from 'redux';

import reducers from './reducers/reducer'

export default function configureStore (initialState = {}) {
  const store = createStore(
    reducers,
    initialState
  )
  return store
}




