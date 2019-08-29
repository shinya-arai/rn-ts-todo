import { connect } from 'react-redux'
import { AppState } from '../store'
import { Dispatch } from 'redux'
import { addCount, decCount, resetCount, CounterAction } from '../actions'
import Counter, { CounterProps } from '../components/Counter'

interface DispatchProps {
  addCount: () => void
  decCount: () => void
  resetCount: () => void
}

const mapStateToProps = (state: AppState): CounterProps => ({
    count: state.counterState.count
})

const mapDispatchToProps = (dispatch: Dispatch<CounterAction>): DispatchProps => ({
  addCount: () => dispatch(addCount()),
  decCount: () => dispatch(decCount()),
  resetCount: () => dispatch(resetCount())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
