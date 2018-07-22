import database from '../firebase/firebase';

export const addPost = (post) => ({
  type: 'ADD_POST',
  post
});

export const startAddPost = (postData = {}) => {
  return (dispatch) => {
    const {
      title = '',
      postBody = '',
      tags = '',
      createdAt = 0,
      comments = ''
    } = postData;
    const post = { title, postBody, tags, createdAt, comments };
    database.ref('Posts')
      .push(post)
      .then((ref) => {
        dispatch(addPost({
          id: ref.key,
          ...post
        }));
      });
  };
};

export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id
});

export const startRemovePost = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`Posts/${id}`).remove().then(() => {
      dispatch(removePost({ id }));
    });
  };
};

export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});

export const startEditPost = (id, updates) => {
  return (dispatch) => {
    return database.ref(`Posts/${id}`).update({
      ...updates
    }).then(() => {
      dispatch(editPost(id, updates));
    });
  };
};

export const setPosts = (posts) => ({
  type: 'SET_POSTS',
  posts
});

export const startSetPosts = () => {
  return (dispatch) => {
    return database.ref('Posts').once('value').then((snapshot) => {
        const posts = [];
        snapshot.forEach((childSnapshot) => {
          const firebaseComments = childSnapshot.val().comments;
          const comments = [];
          for (let key in firebaseComments) {
            if (firebaseComments.hasOwnProperty(key)) {
              comments.push({
                id: key,
                ...firebaseComments[key]
              });
            }
          }
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
            comments
          });
        });
        dispatch(setPosts(posts));
      });
  }
}

export const addComment = ({ commentId, postId, comment }) => ({
  type: 'ADD_COMMENT',
  commentId,
  postId,
  comment
  }
);

export const startAddComment = (postId, commentData) => {
  return (dispatch) => {
    const {
      name = '',
      email = '',
      commentBody = ''
    } = commentData;
    const comment = { name, email, commentBody };
    database.ref(`Posts/${postId}/comments`)
      .push(commentData)
      .then((ref) => {
        dispatch(addComment({
          commentId: ref.key,
          postId,
          comment
        }));
      });
  };
};

export const removeComment = (postId, commentId) => ({
  type: 'REMOVE_COMMENT',
  postId,
  commentId
});

export const startRemoveComment = (postId, commentId) => {
  return (dispatch) => {
    return database.ref(`Posts/${postId}/comments/${commentId}`).remove().then(() => {
      dispatch(removeComment(postId, commentId));
    });
  };
};