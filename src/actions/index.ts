import { User } from '../reducers/usersReducer'
import { Post } from '../reducers/postsReducer'
import store from '../store'

export enum UsersActionType {
  CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER'
}

export enum PostsActionType {
  ADD_POST = 'ADD_POST'
}

export interface UsersAction {
  type: UsersActionType,
  payload: {
    newCurrentUser: User,
  }
}

export interface PostsAction {
  type: PostsActionType
  payload: {
    text: string
    name: string | null
    // count: number
  }
}

export const changeCurrentUser = (userId: number): UsersAction => {
  const { users } = store.getState().usersState

  const newCurrentUserArray = users.filter((user: User) => user.id === userId)

  const newCurrentUser = {...newCurrentUserArray}[0]

  return {
    type: UsersActionType.CHANGE_CURRENT_USER,
    payload: {
      newCurrentUser
    }
  }
}

export const addPost = (text: string): PostsAction => {
  const { currentUser } = store.getState().usersState

  return {
    type: PostsActionType.ADD_POST,
    payload: {
      text,
      name: currentUser && currentUser.name
    }
  }
}