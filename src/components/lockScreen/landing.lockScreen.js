import React from "react";
import Clock from "react-live-clock";
import { Icon } from "@fluentui/react";
import "./lockScreen.scss";

function LockWallpaperScreen({ isMac }) {
	return (
		<div className={`screenHeight ${isMac ? 'macos-lock' : 'windows-lock'} uk-flex uk-flex-center uk-flex-middle`}>
			{/* LockScreen Message */}
			<div className="uk-overlay uk-flex uk-flex-column mobile-scroll-container">
				{isMac && (
					<div className="macos-lock-content uk-text-center">
						<div className="macos-lock-clock uk-margin-bottom">
							<h1 className="uk-heading-medium font-color-white">
								<Clock format={"HH:mm"} ticking={true} />
							</h1>
							<h3 className="font-color-white">
								<Clock format={"dddd, D MMMM"} ticking={true} />
							</h3>
						</div>
						<p className="uk-text-meta font-color-white">
							Click or press any key to unlock
						</p>
					</div>
				)}
				{!isMac && (
					<div className="font-color-white uk-text-meta">
						<p className="uk-text-lead font-color-white">
							Click anywhere to unlock.
						</p>
					</div>
				)}
			</div>

			{/* Windows LockScreen Clock */}
			{!isMac && (
				<div className="uk-position-bottom-left uk-overlay uk-flex uk-flex-column">
					<h1 className="uk-heading-large uk-margin-remove-bottom font-color-white ">
						<Clock ticking={true} />
					</h1>
					<h1 className="uk-heading-small uk-margin-remove-top font-color-white ">
						<Clock format={"dddd,DD MMMM"} ticking={true} />
					</h1>
				</div>
			)}

			{/* LockScreenIcons */}
			<div className="uk-position-bottom-right uk-overlay uk-flex uk-flex-column">
				<div className="font-color-white uk-text-lead">
					<Icon iconName="WifiEthernet" />
				</div>
			</div>
		</div>
	);
}

export default LockWallpaperScreen;
