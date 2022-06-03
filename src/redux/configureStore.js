import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import shelfReducer from './shelves';

export default configureStore({
  reducer: {
    books: booksReducer,
    shelves: shelfReducer,
  },
});
