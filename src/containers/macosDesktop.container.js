import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuBar from "../components/macos/menuBar.component";
import Dock from "../components/macos/dock.component";
import Launchpad from "../components/macos/launchpad.component";
import Desktop from "../components/desktop/desktop";
import { ACTION_TYPES } from "../utils/documents/enums";
import "./macos.scss";

function MacosDesktopContainer() {
    const current_settings = useSelector((state) => state.settingsState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: ACTION_TYPES.APP_INIT });
    }, [dispatch]);

    return (
        <div className="screenHeight macos-layout">
            <MenuBar />
            <Desktop isMac={true} />
            <Dock />
            <Launchpad />
        </div>
    );
}

export default MacosDesktopContainer;
