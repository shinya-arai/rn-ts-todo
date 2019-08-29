export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

const counterReducer = (state: CounterState = initialState, action: any): CounterState => {
  switch(action.type) {
    default:
      return state
  }
}

export default counterReducer