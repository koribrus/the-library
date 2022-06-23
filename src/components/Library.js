import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Shelves from './Shelves';
import BookList from './BookList';
import BookDetail from './BookDetail';
import BookViewer from './BookViewer';
import LibraryModal from './modals/LibraryModal';
import { fetchBooks } from '../redux/books';
import './Library.css';

const Library = () => {
  const { selectedBook } = useSelector((state) => state.books);
  const { showModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(1005));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderModal = () => {
    return showModal ? <LibraryModal /> : '';
  };

  return (
    <div>
      <Header />
      <div className='app-lib'>
        <div className='container-lib grid-lib'>
          <div className='column-lib column-left-lib'>
            <div className='column-insert'>
              <div className='book-detail'>
                <BookDetail book={selectedBook} />
              </div>
              <div className='book-selection'>
                <BookList />
                <Shelves />
              </div>
            </div>
          </div>
          <div className='column book-view'>
            <BookViewer width='384' height='575' />
          </div>
        </div>
      </div>
      {renderModal()}
    </div>
  );
};

export default Library;
