import React from 'react';
import './BookItem.css';

const BookItem = ({ book, onBookSelect }) => {
  return (
    <div className='card' onClick={() => onBookSelect(book)}>
      <div className='image' href='#'>
        <img src={book.volumeInfo.imageLinks.thumbnail} />
      </div>
      <div className='content'>
        <a className='book-title' href='#'>
          {book.volumeInfo.title.split(':')[0]}
        </a>
        {/* <div className='meta'>
          <span className='date book-year'>{book.volumeInfo.publishedDate.slice(0, 4)}</span>
        </div> */}
        <div className='description book-author'>{book.volumeInfo.authors[0]}</div>
      </div>
    </div>
  );
};

export default BookItem;
