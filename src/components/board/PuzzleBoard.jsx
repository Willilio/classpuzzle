import { useMemo } from 'react';
import PuzzleRow from './PuzzleRow';
import { useDispatch } from 'react-redux';
import { cycleSquare } from '../../services/slices/boardState';

const NUM_BOARD_ROWS = 6;

/**
 * The Puzzle Board contains the puzzle itself
 * @param {{boardState: [number]}} props
 */
const PuzzleBoard = ({ boardState }) => {
  const dispatch = useDispatch();

  const rowValues = useMemo(() => {
    const lol = [];
    for (let i = 0; i < NUM_BOARD_ROWS; i++) {
      lol.push(boardState.slice(i*NUM_BOARD_ROWS, (i+1)*NUM_BOARD_ROWS));
    }
    console.log(lol);
    return lol;
  }, [boardState]);

  const onSquareClicked = (row, column) => {
    const squareIndex = row * NUM_BOARD_ROWS + column;
    dispatch(cycleSquare({ squareID: squareIndex, direction: 1 }))
  }

  return (
    <div className="classpuzzle-container">
      <div className="classpuzzle-board">
        {rowValues.map((states, index) => (
          <PuzzleRow squareStates={states} onRowClick={column => onSquareClicked(index, column)} />
        ))}
      </div>
    </div>
  );
};

export default PuzzleBoard;