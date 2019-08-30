import { connect } from 'react-redux'
import TodoList, { Props } from '../components/TodoList'
import { AppState } from '../store'

const mapStateToProps = (state: AppState): Props => ({
  posts: state.postsState.posts
})

export default connect(
  mapStateToProps
)(TodoList)
