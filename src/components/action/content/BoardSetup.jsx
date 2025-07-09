import { useMemo } from "react";
import ActionButton from "../common/ActionButton";

const BoardSetup = ({ theme }) => {
    const themePrefix = useMemo(() => `actionlist-${theme}group`, [theme]);

    const zeroBoard = async () => {
        alert("Zeroing board not yet implemented!");
    }

    return (
        <div className={`${themePrefix}-container`} id>
            <p className={`${themePrefix}-title`}>Board Setup</p>
            <ActionButton text="Reset Board" themePrefix={themePrefix} handleOnClick={zeroBoard} />
        </div>
    )
}

export default BoardSetup;