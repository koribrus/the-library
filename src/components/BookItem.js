import React from 'react';
import './BookItem.css';

const BookItem = ({ book, onBookSelect, current }) => {
  console.log(book);
  return (
    <div className='slide' style={{ transform: `translateX(${-current * 100}%)` }}>
      <div className='card' onClick={() => onBookSelect(book)}>
        <a className='image' href={book.volumeInfo.infoLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt='reading glasses and books on desk' />
        </a>
        <div className='content'>
          <a
            className='book-title'
            href={book.volumeInfo.infoLink}
            rel='noreferrer'
            target='_blank'
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
