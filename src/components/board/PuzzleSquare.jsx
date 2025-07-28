import { useMemo } from 'react';

/**
 * @typedef {Object} PuzzleSquareProps
 * @property {number} squareState The state of the square
 * @property {() => void} onSquareClick The callback for clicking the square
 */

/**
 * @param {PuzzleSquareProps} props
 */
const PuzzleSquare = ({ squareState, onSquareClick }) => {
  const squareClasses = useMemo(() => {
    const isNonTrivialState = squareState > 0;
    return `classpuzzle-square ${isNonTrivialState ? `classpuzzle-square${squareState}` : ''}`;
  }, [squareState]);

  return (<div className={squareClasses} onClick={onSquareClick}>
    Puzzle Square!
  </div>);
};

export default PuzzleSquare;