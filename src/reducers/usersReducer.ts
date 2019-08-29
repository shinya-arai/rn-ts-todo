import { UsersAction, UsersActionType } from '../actions'

export type User = {
  id: number,
  name: string,
  count: number
}

export interface UsersState {
  users: User[]
  currentUser: null | User
}

const initialState = {
  users: [
    {id: 1, name: 'taro', count: 0},
    {id: 2, name: 'jiro', count: 0},
    {id: 3, name: 'saburo', count: 0},
    {id: 4, name: 'shiro', count: 0},
    {id: 5, name: 'goro', count: 0},
  ],
  currentUser: null
}

const usersReducer = (state: UsersState = initialState, action: UsersAction): UsersState => {
  switch(action.type) {
    default:
      return state
  }
}

export default usersReducer