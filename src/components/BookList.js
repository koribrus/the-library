import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import CarouselControls from './CarouselControls';
import { select } from '../redux/books';
import { setCurrent } from '../redux/slides';
import './BookList.css';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  const { current } = useSelector((state) => state.slides);
  const dispatch = useDispatch();

  // * select book for BookDetail & BookViewer
  const onBookSelect = (book) => {
    dispatch(select(book));
  };

  // * render book list
  // adjustment changes the starting point of the list to the center point.
  const renderBooks = () => {
    const adjustment = Math.ceil(books.length / 2) - 4;
    const renderedBooks = books.map((book) => (
      <BookItem
        book={book}
        key={book.id}
        onBookSelect={onBookSelect}
        current={current}
        adjustment={adjustment}
      />
    ));

    return renderedBooks;
  };

  // * carousel button control functions (adjustment variable changes the logic so that the list scrolls and stops on either end given an intial centering orientation for all items)
  const prev = () => {
    const adjustment = Math.floor(books.length / 2);
    const index = current > 0 - adjustment ? current - 1 : current;
    dispatch(setCurrent(index));
  };

  const next = () => {
    const adjustment = Math.floor(books.length / 2);
    const index = current < books.length - 1 - adjustment ? current + 1 : current;
    dispatch(setCurrent(index));
  };

  return (
    <div className='list-lib'>
      <div className='carousel'>
        {renderBooks()}
        <div className='overlay-left'></div>
        <div className='overlay-right'></div>
      </div>
      <CarouselControls prev={prev} next={next} />
    </div>
  );
};

export default BookList;
