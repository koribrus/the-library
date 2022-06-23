import React from 'react';
import './BookItem.css';

const BookItem = ({ book, onBookSelect, current, adjustment }) => {
  return (
    <div
      className='slide-lib'
      style={{ transform: `translateX(${(-current - adjustment) * 100}%)` }}
    >
      <div className='card-lib' onClick={() => onBookSelect(book)}>
        <div className='image-lib'>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt='reading glasses and books on desk' />
        </div>
        <div className='content-lib'>
          <a
            className='book-title'
            href={book.volumeInfo.infoLink}
            target='_blank'
            rel='noopener noreferrer'
          >
            {book.volumeInfo.title.split(':')[0]}
          </a>
          <div className='description book-author'>{book.volumeInfo.authors[0]}</div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
