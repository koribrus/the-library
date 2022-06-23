import React from 'react';
import { useSelector } from 'react-redux';

const BookViewerTwo = () => {
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
        width='533'
        height='800'
        frameBorder='0'
        scrolling='no'
      ></iframe>
    );
  };

  return <div className='book-viewer'>{renderViewer()}</div>;
};

export default BookViewerTwo;
