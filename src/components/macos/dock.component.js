import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ACTION_TYPES } from "../../utils/documents/enums";
import "./dock.scss";

function Dock() {
    const apps = useSelector((state) => state.appState.apps);
    const dispatch = useDispatch();

    const handleAppClick = (app) => {
        dispatch({ type: ACTION_TYPES.APP_CLICK, app: app });
    };

    return (
        <div className="macos-dock-container">
            <div className="macos-dock">
                {apps.map((app, index) => (
                    <div
                        key={index}
                        className={`dock-item ${app.isOpened ? 'opened' : ''}`}
                        onClick={() => handleAppClick(app)}
                        title={app.name}
                    >
                        <img src={app.icon} alt={app.name} />
                        {app.isOpened && <div className="dot"></div>}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dock;
