import { useMemo } from "react";

const PuzzleSquare = ({ squareState }) => {
    const squareClasses = useMemo(() => {
        const isNonTrivialState = squareState > 0;
        return `classpuzzle-square ${isNonTrivialState ? `classpuzzle-square${squareState}` : ''}`;
    }, [squareState]);

    return (<div className={squareClasses}>
        Puzzle Square!
    </div>);
}

export default PuzzleSquare;