import React from 'react';

const LoadingPage = () => (
  <div className='loader-page'>
    <div className='loader'>
      <div className='loader-center loader-square'>
        <div className='loader-bottom loader-square'></div>
        <div className='loader-top loader-square'></div>
        <div className='loader-left loader-side'></div>
        <div className='loader-right loader-side'></div>
      </div>
    </div>
  </div>
);

export default LoadingPage;