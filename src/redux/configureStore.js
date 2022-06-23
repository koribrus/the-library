import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books';
import shelfReducer from './shelves';
import slidesReducer from './slides';
import visibilityReducer from './visibility';
import modalReducer from './modals';

export default configureStore({
  reducer: {
    books: booksReducer,
    shelves: shelfReducer,
    slides: slidesReducer,
    visibility: visibilityReducer,
    modal: modalReducer,
  },
});
