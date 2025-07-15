import { configureStore } from '@reduxjs/toolkit';
import boardStateReducer from './slices/boardState';

export default configureStore({
  reducer: {
    boardState: boardStateReducer,
  },
});