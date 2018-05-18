import React from 'react';

export default class BlogAuthenticated extends React.Component {
  render() {
    return (
      <div>
        BlogAuth
        <button className='button button--header' onClick={startLogout}>Logout</button>
      </div>
    )
  }
}