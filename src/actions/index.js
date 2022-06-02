import books, { API_KEY, USER_ID } from '../apis/books';

// * action creator
export const fetchBooks = (id) => {
  return async function (dispatch) {
    const response = await books.get(`${USER_ID}/bookshelves/${id}/volumes?key=${API_KEY}`);

    dispatch({
      type: 'FETCH_BOOKS',
      payload: response.data.items,
    });
  };
};

export const selectBook = (book) => {
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
};
