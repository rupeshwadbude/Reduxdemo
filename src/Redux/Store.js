import FormReducer from './Reducer'
import { createStore,applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['Reducer']
}

const persistedReducer = persistReducer(persistConfig, FormReducer,applyMiddleware(logger))
export const  store = createStore(persistedReducer)
export const  persistor = persistStore(store)
export default {store, persistor};