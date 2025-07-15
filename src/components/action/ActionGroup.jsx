import { useMemo } from 'react';
import BoardSetup from './content/BoardSetup';

/**
 * @typedef {('light'|'dark')} ActionThemes
 */

/**
 * Creates the content from the type of action
 * @param {('BoardSetup')} contentType
 */
const createActionContent = contentType => {
  switch(contentType) {
  case 'BoardSetup':
    return <BoardSetup />;
  default:
    return <></>;
  }
};

/**
 * ActionGroup is a placeholder for different groups of actions which can be placed on screen
 * @param {{group: import('./ActionList').ActionParams}} props
 */
const ActionGroup = ({ group }) => {
  const groupContent = useMemo(() => createActionContent(group.name), [group.name]);
  return <>{group.enabled && <div className="actiongroup">{groupContent}</div>}</>;
};

export default ActionGroup;