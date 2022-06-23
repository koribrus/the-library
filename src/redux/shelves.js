import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shelves: [
    {
      name: 'Sci/Fantasy',
      id: 1002,
    },
    {
      name: 'Psychology',
      id: 1003,
    },
    {
      name: 'Philosophy',
      id: 1005,
    },
    {
      name: 'Fiction',
      id: 1007,
    },
    {
      name: 'Travel',
      id: 1008,
    },
    {
      name: 'Society',
      id: 1010,
    },
    {
      name: 'Comics',
      id: 1011,
    },
    {
      name: 'Classics',
      id: 1012,
    },
  ],
  active: 1005,
};

const shelvesSlice = createSlice({
  name: 'shelves',
  initialState,
  reducers: {
    activate: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { activate } = shelvesSlice.actions;
export default shelvesSlice.reducer;
