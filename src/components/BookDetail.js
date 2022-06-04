import React from 'react';
import './BookDetail.css';

const BookDetail = ({ book }) => {
  if (!book) return '';

  return (
    <div className='book-details'>
      <div className='book-title'>
        <h2>{`${book.volumeInfo.title} (${book.volumeInfo.publishedDate.slice(0, 4)})`}</h2>
      </div>
      <p>{book.volumeInfo.description}</p>
    </div>
  );
};

export default BookDetail;
