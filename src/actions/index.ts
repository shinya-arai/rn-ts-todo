export enum CounterActionType {
  ADD_COUNT = 'ADD_COUNT',
  DEC_COUNT = 'DEC_COUNT',
  RESET_COUNT = 'RESET_COUNT'
}

export interface CounterAction {
  type: CounterActionType,
  payload?: {}
}

export const addCount = (): CounterAction => {
  return {
    type: CounterActionType.ADD_COUNT
  }
}

export const decCount = (): CounterAction => {
  return {
    type: CounterActionType.DEC_COUNT
  }
}

export const resetCount = (): CounterAction => {
  return {
    type: CounterActionType.RESET_COUNT
  }
}