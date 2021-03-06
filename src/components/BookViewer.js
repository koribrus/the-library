import React from 'react';
import { useSelector } from 'react-redux';

const BookViewer = () => {
  const { selectedBook } = useSelector((state) => state.books);

  const renderViewer = () => {
    if (!selectedBook) return '';

    return (
      <iframe
        title='preview'
        style={{
          display: 'block',
          border: '0px',
        }}
        src={`https://books.google.ca/books?id=${selectedBook.id}&newbks=0&pg=PP1&output=embed`}
        width='384'
        height='575'
        frameBorder='0'
        scrolling='no'
      ></iframe>
    );
  };

  return <div className='book-viewer'>{renderViewer()}</div>;
};

export default BookViewer;
