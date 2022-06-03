import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='navbar'>
        <div className='navbar-top'></div>
        <div className='navbar-content'>
          <a className='navbar-logo' href='#'>
            <p>koribrus.io</p>
          </a>
        </div>
      </div>
      <div className='banner'>
        <div className='overlay'>
          <div className='banner-content'>
            <h1 className='banner-title'>The Library</h1>
            <p className='banner-text'>
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
