import React from 'react';
import './ShelfButton.css';

const ShelfButton = (props) => {
  return (
    <button className={props.classes} onClick={props.onButtonClick}>
      {props.name}
    </button>
  );
};

export default ShelfButton;
