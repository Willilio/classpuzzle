import { useMemo } from "react";
import ActionGroup from "./ActionGroup";

/**
 * @typedef {Object} ActionParams
 * @property {string} name The name of the action group
 * @property {boolean} enabled Whether the action group should appear in the list
 */

/**
 * @typedef {{actions: [ActionParams]}} ActionListParams
 */

/**
 * ActionList renders the actions available to manipulate the app state
 * @param {ActionListParams} props
 */
const ActionList = ({ actions }) => {
    const groupings = useMemo(() => {
        return actions.map(groupData => (
            <ActionGroup group={groupData} />
        ));
    }, [actions]);

    return (
        <div className="actionlist-container">
            {groupings}
        </div>
    );
}

export default ActionList;