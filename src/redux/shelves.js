import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shelves: [
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
  ],
  active: null,
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
