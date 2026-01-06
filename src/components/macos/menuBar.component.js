import React, { useState, useEffect } from "react";
import "./menuBar.scss";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setSystemState } from "../../utils/actions/system.action";

function MenuBar() {
    const [time, setTime] = useState(moment().format("ddd MMM D  h:mm A"));
    const [showAppleMenu, setShowAppleMenu] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(moment().format("ddd MMM D  h:mm A"));
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const handlePowerClick = (state) => {
        dispatch(setSystemState(state));
        setShowAppleMenu(false);
    };

    return (
        <div className="macos-menubar">
            <div className="left-section">
                <div className="menu-item apple-icon" onClick={() => setShowAppleMenu(!showAppleMenu)}>
                    <i className="ms-Icon ms-Icon--Apple" aria-hidden="true"></i>
                    {showAppleMenu && (
                        <div className="apple-dropdown blur">
                            <div className="dropdown-item" onClick={() => handlePowerClick('isLocked')}>Lock Screen</div>
                            <div className="divider"></div>
                            <div className="dropdown-item">System Settings...</div>
                            <div className="dropdown-item">App Store...</div>
                            <div className="divider"></div>
                            <div className="dropdown-item">Recent Items</div>
                            <div className="divider"></div>
                            <div className="dropdown-item">Force Quit...</div>
                            <div className="divider"></div>
                            <div className="dropdown-item" onClick={() => window.location.reload()}>Restart...</div>
                            <div className="dropdown-item" onClick={() => handlePowerClick('isShutDown')}>Shut Down...</div>
                            <div className="divider"></div>
                            <div className="dropdown-item" onClick={() => window.location.href = '/'}>Log Out Samson Juma...</div>
                        </div>
                    )}
                </div>
                <div className="menu-item app-name">Portfolio</div>
                <div className="menu-item">File</div>
                <div className="menu-item">Edit</div>
                <div className="menu-item">View</div>
                <div className="menu-item">Go</div>
                <div className="menu-item">Window</div>
                <div className="menu-item">Help</div>
            </div>
            <div className="right-section">
                <div className="menu-item icon" title="Control Center">
                    <i className="ms-Icon ms-Icon--Equalizer" aria-hidden="true"></i>
                </div>
                <div className="menu-item icon" title="Lock Screen" onClick={() => handlePowerClick('isLocked')}>
                    <i className="ms-Icon ms-Icon--Lock" aria-hidden="true"></i>
                </div>
                <div className="menu-item icon" title="Shut Down" onClick={() => handlePowerClick('isShutDown')}>
                    <i className="ms-Icon ms-Icon--PowerButton" aria-hidden="true" style={{ color: '#ff5f56' }}></i>
                </div>
                <div className="menu-item icon" title="Sign Out" onClick={() => window.location.href = '/'}>
                    <i className="ms-Icon ms-Icon--SignOut" aria-hidden="true"></i>
                </div>
                <div className="menu-item time">{time}</div>
            </div>
        </div>
    );
}

export default MenuBar;
