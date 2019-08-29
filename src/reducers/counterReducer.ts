import { CounterAction, CounterActionType } from '../actions'

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

const counterReducer = (state: CounterState = initialState, action: CounterAction): CounterState => {
  switch(action.type) {
    case CounterActionType.ADD_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
    case CounterActionType.DEC_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
    case CounterActionType.RESET_COUNT:
      return {
        ...state,
        count: 0
      }
    default:
      return state
  }
}

export default counterReducer