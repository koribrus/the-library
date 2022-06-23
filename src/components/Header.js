import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header-lib'>
      <div className='navbar-lib'>
        <div className='navbar-top'></div>
        <div className='navbar-content-lib'>
          <p>koribrus.io</p>
        </div>
      </div>
      <div className='banner-lib'>
        <div className='overlay-lib'>
          <div className='banner-content-lib'>
            <h1 className='banner-title-lib'>The Library</h1>
            <p className='banner-text-lib'>
              Welcome to my recommended reading list. These are the titles that have impacted my
              thinking, understanding and enjoyment of the world.
            </p>
            <p className='banner-text'>Browse and read at your leisure.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
