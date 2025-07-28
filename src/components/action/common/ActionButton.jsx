/**
 * @typedef {Object} ActionButtonProps
 * @property {string} themePrefix The theme to use for this component
 * @property {string} text The text to display on the button
 * @property {() => void} handleOnClick The callback for clicking the button
 */

/**
 * @param {ActionButtonProps} props
 */
const ActionButton = ({ themePrefix, text, handleOnClick }) => {
  return (
    <div className={`${themePrefix}-actionbutton actionbutton`} onClick={handleOnClick}>
      {text}
    </div>
  );
};

export default ActionButton;