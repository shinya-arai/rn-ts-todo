import { createStore, combineReducers } from 'redux'
import usersReducer, { UsersState } from '../reducers/usersReducer'
import postsReducer, { PostsState } from '../reducers/postsReducer'

export interface AppState {
  usersState: UsersState,
  postsState: PostsState
}

const rootReducer = combineReducers<AppState>({
  usersState: usersReducer,
  postsState: postsReducer
})

const store = createStore(rootReducer)

export default store

