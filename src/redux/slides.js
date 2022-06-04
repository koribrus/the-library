import { createSlice } from '@reduxjs/toolkit';

const slideSlice = createSlice({
  name: 'slides',
  initialState: {
    current: 0,
  },
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrent } = slideSlice.actions;
export default slideSlice.reducer;
