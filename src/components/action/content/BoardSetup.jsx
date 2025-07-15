import { useMemo } from 'react';
import ActionButton from '../common/ActionButton';

/**
 * The board setup action group contains the controls to setup the puzzle board as desired
 * @param {{theme: import('../ActionGroup').ActionThemes}} props
 */
const BoardSetup = ({ theme='light' }) => {
  const themePrefix = useMemo(() => `boardsetup-${theme}group`, [theme]);

  const zeroBoard = async () => {
    alert('Zeroing board not yet implemented!');
  };

  return (
    <div className={`${themePrefix}-container`}>
      <p className={`${themePrefix}-title`}>Board Setup</p>
      <ActionButton text="Reset Board" themePrefix={themePrefix} handleOnClick={zeroBoard} />
    </div>
  );
};

export default BoardSetup;