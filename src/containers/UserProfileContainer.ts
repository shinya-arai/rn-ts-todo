import { AppState } from '../store'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { changeCurrentUser, UsersAction } from '../actions'
import UserProfile, { Props } from '../components/UserProfile'

interface DispatchProps {
  changeCurrentUser: (userId: number) => void
}

const mapStateToProps = (state: AppState): Props => ({
  users: state.usersState.users,
  currentUser: state.usersState.currentUser
})

const mapDispatchToProps = (dispatch: Dispatch<UsersAction>): DispatchProps => ({
  changeCurrentUser: (userId: number) => {
    dispatch(changeCurrentUser(userId))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)

