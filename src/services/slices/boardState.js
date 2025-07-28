import { createSlice } from '@reduxjs/toolkit';

export const EmptyBoardState = [
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
];

export const boardStateSlice = createSlice({
  name: 'boardState',
  initialState: {
    board: EmptyBoardState,
    numStates: 3,
  },
  reducers: {
    /**
     * Resets the board state to an empty board
     */
    resetBoard: (state) => {
      state.board = EmptyBoardState;
    },
    /**
     * Cycles the state of a square in the direction specified
     * @param {{type: string, payload: {squareID: number, direction: number}}} action
     */
    cycleSquare: (state, action) => {
      state.board[action.payload.squareID] += action.payload.direction;
      // In order to handle negative directions, we add the number of states
      state.board[action.payload.squareID] += state.numStates;
      state.board[action.payload.squareID] %= state.numStates;
    },
    /**
     * Sets the number of states used in the board, which includes the empty state
     * @param {{type: string, payload: {numStates: number}}} action
     */
    setNumStates: (state, action) => {
      state.numStates = action.payload.numStates;
    }
  },
});

// Export the actions from boardState
export const { resetBoard, cycleSquare, setNumStates } = boardStateSlice.actions;

export default boardStateSlice.reducer;