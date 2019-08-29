import { User } from '../reducers/usersReducer'
import store from '../store'

export enum UsersActionType {
  CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER'
}

export interface UsersAction {
  type: UsersActionType,
  payload?: {
    newCurrentUser: User
  }
}

export const changeCurrentUser = (userId: number): UsersAction => {
  return {
    type: UsersActionType.CHANGE_CURRENT_USER,
  }
}