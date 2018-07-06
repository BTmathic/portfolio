//import uuid from 'uuid';
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
      createdAt = 0
    } = postData;
    const post = { title, postBody, tags, createdAt };
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
          posts.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setPosts(posts));
      });
  }
}