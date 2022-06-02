import React from 'react';
import './BookDetail.css';

const BookDetail = ({ book }) => {
  console.log(book);
  if (!book) return '';

  return (
    <div className='book-details'>
      <h2>{`${book.volumeInfo.title} (${book.volumeInfo.publishedDate.slice(0, 4)})`}</h2>
      <p>{book.volumeInfo.description}</p>
    </div>
  );
};

export default BookDetail;
