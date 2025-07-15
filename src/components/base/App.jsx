import ActionList from '../action/ActionList';
import PuzzleBoard from '../board/PuzzleBoard';

const exampleBoardState = [
  1, 0, 0, 0, 2, 0,
  2, 1, 1, 0, 0, 0,
  0, 1, 2, 0, 0, 0,
  0, 0, 0, 0, 0, 0,
  0, 0, 0, 2, 2, 1,
  0, 0, 0, 1, 1, 0,
];

/** @type {[import('../action/ActionList').ActionParams]} */
const testActions = [
  {
    name: 'BoardSetup',
    enabled: true,
  },
];

const App = () => {
  return (
    <div className="app-container">
      <PuzzleBoard boardState={exampleBoardState} />
      <ActionList actions={testActions} />
    </div>
  );
};

export default App;