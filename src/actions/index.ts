export enum CounterActionType {
  ADD_COUNT = 'ADD_COUNT',
  RESET_COUNT = 'RESET_COUNT'
}

export interface CounterAction {
  type: CounterActionType,
  
}