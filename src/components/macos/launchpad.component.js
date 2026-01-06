import React from "react";
import "./launchpad.scss";

function Launchpad() {
    return (
        <div id="launchpad" className="macos-launchpad" hidden>
            {/* We'll implement the grid later if needed, for now it's just a structure */}
            <div className="launchpad-content">
                <h1>Launchpad</h1>
            </div>
        </div>
    );
}

export default Launchpad;
