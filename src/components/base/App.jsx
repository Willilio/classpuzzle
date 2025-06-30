import PuzzleBoard from "../board/PuzzleBoard";

const exampleBoardState = [
    1, 0, 0, 0, 2, 0,
    2, 1, 1, 0, 0, 0,
    0, 1, 2, 0, 0, 0,
    0, 0, 0, 0, 0, 0,
    0, 0, 0, 2, 2, 1,
    0, 0, 0, 1, 1, 0,
];

const App = () => {
    return <PuzzleBoard boardState={exampleBoardState} />;
};

export default App;