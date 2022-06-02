import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <h1 className='banner-title'>The Library</h1>
        <p className='banner-text'>
          Browse by recommended reading list. Add it to your collection or spend a quiet hour
          reading any of the titles you like.
        </p>
      </div>
    </div>
  );
};

export default Header;
