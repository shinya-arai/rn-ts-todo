import { PostsAction, PostsActionType } from '../actions'

const initialState = {
  posts: []
}

export type Post = {
  text: string
  name: null | string
  // count: number
}

export interface PostsState {
  posts: null | Post[]
}

const postsReducer = (state: PostsState = initialState, action: PostsAction): PostsState => {
  switch(action.type) {
    case PostsActionType.ADD_POST:
      return {
        ...state,
        posts: state.posts && state.posts.concat(action.payload)
      }
    default:
      return state
  }
}

export default postsReducer