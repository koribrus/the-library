import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  aboutVisible: false,
  skillsVisible: false,
  projectsVisible: false,
  project1Visible: false,
  project2Visible: false,
  project3Visible: false,
  contactVisible: false,
};

export const visibilitySlice = createSlice({
  name: 'visibility',
  initialState,
  reducers: {
    setAbout: (state, action) => {
      state.aboutVisible = action.payload;
    },
    setSkills: (state, action) => {
      state.skillsVisible = action.payload;
    },
    setProjects: (state, action) => {
      state.projectsVisible = action.payload;
    },
    setProject1: (state, action) => {
      state.project1Visible = action.payload;
    },
    setProject2: (state, action) => {
      state.project2Visible = action.payload;
    },
    setProject3: (state, action) => {
      state.project3Visible = action.payload;
    },
    setContact: (state, action) => {
      state.contactVisible = action.payload;
    },
  },
});

export const {
  setAbout,
  setSkills,
  setProjects,
  setProject1,
  setProject2,
  setProject3,
  setContact,
} = visibilitySlice.actions;
export default visibilitySlice.reducer;
