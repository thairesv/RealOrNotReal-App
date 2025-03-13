import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  screen: "/intro",
  score: 0,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    changeScore: (state, action) => {
      state.score = action.payload;
    },
    resetGame: (state, action) => {
      state.score = 0;
      state.screen = "/intro";
    },
    resetScore: (state) => {
      state.score = 0;
    }
  },
});

export const { changeScore, resetGame, resetScore } = quizSlice.actions;
export default quizSlice.reducer;