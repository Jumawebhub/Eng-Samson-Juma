import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ACTION_TYPES, OS_TYPES, SCREENS } from '../utils/documents/enums';
import '../theme/selection.scss';
import macLogo from '../assets/images/baseImages/mac.png';
import windowsLogo from '../assets/images/baseImages/windows_10.svg';

const Selection = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSelectOS = (os) => {
        dispatch({ type: ACTION_TYPES.SET_OS, os: os });
        dispatch({ type: ACTION_TYPES.SET_STATE, systemState: 'isLocked' });
        navigate('/home');
    };

    return (
        <div className="selection-screen">
            <div className="header-section">
                <h1>WELCOME TO MY PORTFOLIO</h1>
                <h2>Eng Samson Juma - Software Engineer</h2>
                <h3>Choose Your Experience</h3>
                <p>Select your preferred operating system theme</p>
            </div>

            <div className="experience-cards">
                <div className="card" onClick={() => handleSelectOS(OS_TYPES.WINDOWS)}>
                    <div className="icon">
                        <img src={windowsLogo} alt="Windows 10" style={{ width: '80px', height: '80px' }} />
                    </div>
                    <h4>Windows 10</h4>
                    <p>Classic desktop experience with taskbar and start menu</p>
                    <button className="enter-btn">Enter &gt;</button>
                </div>

                <div className="card" onClick={() => handleSelectOS(OS_TYPES.MACOS)}>
                    <div className="icon">
                        <img src={macLogo} alt="macOS" style={{ width: '80px', height: '80px' }} />
                    </div>
                    <h4>macOS</h4>
                    <p>Modern liquid glass design with dock and menu bar</p>
                    <button className="enter-btn">Enter &gt;</button>
                </div>
            </div>
        </div>
    );
};

export default Selection;
