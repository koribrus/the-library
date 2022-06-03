import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShelfButton from './ShelfButton';
import { fetchBooks } from '../redux/books';
import { activate } from '../redux/shelves';

import './Shelves.css';

const Shelves = () => {
  const { shelves } = useSelector((state) => state.shelves);
  const { active } = useSelector((state) => state.shelves);
  const dispatch = useDispatch();

  const onButtonClick = (id) => {
    dispatch(fetchBooks(id));
    dispatch(activate(id));
  };

  const renderButtons = () => {
    const buttons = shelves.map((shelf) => {
      const classes = active === shelf.id ? 'btn active' : 'btn';

      return (
        <ShelfButton
          classes={classes}
          key={shelf.id}
          name={shelf.name}
          onButtonClick={() => onButtonClick(shelf.id)}
        />
      );
    });

    return buttons;
  };

  return <div className='shelves'>{renderButtons()}</div>;
};

export default Shelves;
