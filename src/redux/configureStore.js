import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import shelfReducer from './shelves';
import slidesReducer from './slides';

export default configureStore({
  reducer: {
    books: booksReducer,
    shelves: shelfReducer,
    slides: slidesReducer,
  },
});
