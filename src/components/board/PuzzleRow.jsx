import { useMemo } from 'react';
import PuzzleSquare from './PuzzleSquare';

const PuzzleRow = ({ squareStates }) => {
  const squares = useMemo(() => {
    return squareStates.map(state => (
      <PuzzleSquare squareState={state} />
    ));
  }, [squareStates]);

  return <div className="classpuzzle-row">{squares}</div>;
};

export default PuzzleRow;