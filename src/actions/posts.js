import uuid from 'uuid';
//import database from '../firebase/firebase';

export const addPost = (
  {
    title = '',
    postBody = '',
    tags = '',
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_POST',
  post: {
    id: uuid(),
    title,
    postBody,
    tags,
    createdAt
  }
});

export const removePost = ({ id } = {}) => ({
  type: 'REMOVE_POST',
  id
});

export const editPost = (id, updates) => ({
  type: 'EDIT_POST',
  id,
  updates
});