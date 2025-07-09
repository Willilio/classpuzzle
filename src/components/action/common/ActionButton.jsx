const ActionButton = ({ themePrefix, text, handleOnClick }) => {
    return (
        <div className={`${themePrefix}-actionbutton`} onClick={handleOnClick}>
            {text}
        </div>
    );
}

export default ActionButton;