import { combineReducers } from 'redux';

const shelfButtonReducer = () => {
  return [
    {
      name: 'Sci Fi',
      id: 1002,
    },
    {
      name: 'Psychology',
      id: 1003,
    },
    {
      name: '5 Stars',
      id: 1004,
    },
    {
      name: 'Philosophy',
      id: 1005,
    },
    {
      name: 'Fantasy',
      id: 1006,
    },
    {
      name: 'Fiction',
      id: 1007,
    },
    {
      name: 'Exploration',
      id: 1008,
    },
    {
      name: 'Non-fiction',
      id: 1009,
    },
  ];
};

const booksReducer = (books = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOKS':
      return action.payload;
    default:
      return books;
  }
};

const selectedBookReducer = (selectedBook = null, action) => {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
    default:
      return selectedBook;
  }
};

export default combineReducers({
  shelves: shelfButtonReducer,
  books: booksReducer,
  selectedBook: selectedBookReducer,
});
