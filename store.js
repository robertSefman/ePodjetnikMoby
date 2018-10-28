import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducer from './reducer'

const persistConfig = {
  key: 'root', // v bistvu karkoli
  storage, // persist handler za store
  // lahko white in black list
}

const callback = () => {
  console.log('rehydration is finished')
}

const persistedReducer = persistReducer(
  persistConfig,
  reducer  // moj dispečer - pure function, ki vrača objekt 
)

// Default in zaenkrat nimam kaj menjat
export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk),
  callback(),
)
export const persistor = persistStore(store)
