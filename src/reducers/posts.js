const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        action.post
      ];
    case 'REMOVE_POST':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_POST':
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            ...action.updates
          }
        } else {
          return post;
        }
      });
    case 'SET_POSTS':
      return action.posts;
    case 'ADD_COMMENT':
      return state.map((post) => {
        if (post.id === action.postId) {
          return {
            ...post,
            comments: post.comments.concat({ id: action.id, ...action.comment })
          };
        } else {
          return post;
        }
      });
    case 'REMOVE_COMMENT':
      return state.map((post) => {
        if (post.id === action.postId) {
          return {
            ...post,
            comments: post.comments.filter((comment) => comment.id !== action.commentId)
          };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
}