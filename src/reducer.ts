import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import { reducer as signInReducer, State as SignInState } from './auth'
import { reducer as homeReducer, State as HomeState } from './home'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: [],
}

export interface RootState {
  home: HomeState
  signIn: SignInState
}

const rootReducer = combineReducers<RootState>({
  home: homeReducer,
  signIn: signInReducer,
})

export const persistedReducer = persistReducer<any, any>(
  rootPersistConfig,
  rootReducer,
)
