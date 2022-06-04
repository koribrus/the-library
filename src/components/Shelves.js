import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShelfButton from './ShelfButton';
import { fetchBooks } from '../redux/books';
import { activate } from '../redux/shelves';
import { setCurrent } from '../redux/slides';
import './Shelves.css';

const Shelves = () => {
  const { shelves } = useSelector((state) => state.shelves);
  const { active } = useSelector((state) => state.shelves);
  const dispatch = useDispatch();

  const onButtonClick = (id) => {
    // * on button click we fetch shelf from Google, set active id to render BookViewer default, and reset the current slide to center.
    dispatch(fetchBooks(id));
    dispatch(activate(id));
    dispatch(setCurrent(0));
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
