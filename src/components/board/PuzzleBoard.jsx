import { useMemo } from 'react';
import PuzzleRow from './PuzzleRow';

/**
 * The Puzzle Board contains the puzzle itself
 * @param {{boardState: [number]}} props
 */
const PuzzleBoard = ({ boardState }) => {
  const rowValues = useMemo(() => {
    const lol = [];
    for (let i = 0; i < 6; i++) {
      lol.push(boardState.slice(i*6, (i+1)*6));
    }
    console.log(lol);
    return lol;
  }, [boardState]);

  return (
    <div className="classpuzzle-container">
      <div className="classpuzzle-board">
        {rowValues.map(states => (
          <PuzzleRow squareStates={states} />
        ))}
      </div>
    </div>
  );
};

export default PuzzleBoard;