import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import Shelves from './Shelves';
import BookList from './BookList';
import BookDetail from './BookDetail';
import BookViewer from './BookViewer';
import { fetchBooks } from '../redux/books';
import './App.css';

const App = () => {
  const { selectedBook } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks(1005));
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div className='app'>
        <div className='container grid'>
          <div className='column column-left'>
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
            <BookViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
