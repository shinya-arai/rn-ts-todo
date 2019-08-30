import { connect } from 'react-redux'
import TodoForm from '../components/TodoForm'
import { Dispatch } from 'redux'
import { PostsAction, addPost } from '../actions'

interface DispatchProps {
  addPost: (text: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch<PostsAction>): DispatchProps => ({
  addPost: (text: string) => {
    dispatch(addPost(text))
  }
})

export default connect(
  null,
  mapDispatchToProps
)(TodoForm)