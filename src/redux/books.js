import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosBooks, { API_KEY, USER_ID } from '../apis/books';

// * async thunk for fetching books from Google
// ! assumes we can pass in the id of the bookshelf
export const fetchBooks = createAsyncThunk('redux/fetchBooks', async (id) => {
  try {
    const response = await axiosBooks.get(`${USER_ID}/bookshelves/${id}/volumes?key=${API_KEY}`);
    return response.data.items;
  } catch (err) {
    return err.message;
  }
});

// * books slice
export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    selectedBook: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    select: (state, action) => {
      state.selectedBook = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { select } = booksSlice.actions;
export default booksSlice.reducer;
