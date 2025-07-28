import { useMemo } from 'react';
import PuzzleSquare from './PuzzleSquare';

/**
 * @typedef {Object} PuzzleRowProps
 * @property {[number]} squareStates The numbers representing the states of each square
 * @property {(number) => void} onRowClick The callback for clicking on a square
 */

/**
 * @param {PuzzleRowProps} props
 */
const PuzzleRow = ({ squareStates, onRowClick }) => {
  const squares = useMemo(() => {
    return squareStates.map((state, index) => (
      <PuzzleSquare squareState={state} onSquareClick={() => onRowClick(index)} />
    ));
  }, [squareStates]);

  return <div className="classpuzzle-row">{squares}</div>;
};

export default PuzzleRow;