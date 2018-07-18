import React from 'react';

const LoadingPage = () => (
  <div id='loader-page'>
    <div id='loader'>
      <div id='loader-center' className='loader-square'>
        <div id='loader-bottom' className='loader-square'></div>
        <div id='loader-top' className='loader-square'></div>
        <div id='loader-left' className='loader-side'></div>
        <div id='loader-right' className='loader-side'></div>
      </div>
    </div>
  </div>
);

export default LoadingPage;