import { createStore, combineReducers } from 'redux'
import usersReducer, { UsersState } from '../reducers/usersReducer'

export interface AppState {
  usersState: UsersState
}

const rootReducer = combineReducers<AppState>({
  usersState: usersReducer
})

const store = createStore(rootReducer)

export default store

