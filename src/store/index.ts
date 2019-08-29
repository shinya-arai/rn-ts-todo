import { createStore, combineReducers } from 'redux'
import counterReducer, { CounterState } from '../reducers/counterReducer'

export interface AppState {
  counterState: CounterState
}

const rootReducer = combineReducers<AppState>({
  counterState: counterReducer
})

const store = createStore(rootReducer)

export default store

