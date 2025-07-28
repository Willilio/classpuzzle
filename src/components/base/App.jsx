import { useSelector } from 'react-redux';
import ActionList from '../action/ActionList';
import PuzzleBoard from '../board/PuzzleBoard';

/** @type {[import('../action/ActionList').ActionParams]} */
const testActions = [
  {
    name: 'BoardSetup',
    enabled: true,
  },
];

const App = () => {
  const gameBoardState = useSelector((state) => state.boardState.board);

  return (
    <div className="app-container">
      <PuzzleBoard boardState={gameBoardState} />
      <ActionList actions={testActions} />
    </div>
  );
};

export default App;