import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookItem from './BookItem';
import { select } from '../redux/books';

import './BookList.css';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const onBookSelect = (book) => {
    console.log(book);
    dispatch(select(book));
  };

  const renderBooks = () => {
    const renderedBooks = books.map((book) => (
      <BookItem book={book} key={book.id} onBookSelect={onBookSelect} />
    ));

    return renderedBooks;
  };

  return <div className='list'>{renderBooks()}</div>;
};

export default BookList;
