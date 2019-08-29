import { User } from '../reducers/usersReducer'
import store from '../store'

export enum UsersActionType {
  CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER'
}

export interface UsersAction {
  type: UsersActionType,
  payload: {
    newCurrentUser: User,
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