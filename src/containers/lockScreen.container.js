import React, { useState } from "react";
import LockWallpaperScreen from "../components/lockScreen/landing.lockScreen";
import lockScreenWall from "../assets/images/wallpapers/lockScreenWall.jpg";
import SignInScreen from "../components/lockScreen/signIn.lockScreen";
import { useContextMenu } from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import DesktopContextMenu from "../components/contextMenu/desktop.contextMenu";
import { SCREENS } from "../utils/documents/enums";

import { useSelector } from "react-redux";
import { OS_TYPES } from "../utils/documents/enums";
import settings from "../utils/data/settings.config";

const MENU_ID = "context-menu";

function LockScreen(props) {
	const selectedOS = useSelector((state) => state.systemState.selectedOS);
	const isMac = selectedOS === OS_TYPES.MACOS;
	const [showSignInPage, setLockScreenState] = useState(false);
	const currentWallpaper = isMac ? settings.macos_wallpaper : lockScreenWall;
	let changeScreenState = () => {
		setLockScreenState(true);
	};

	const { show } = useContextMenu({
		id: MENU_ID,
	});
	function handleContextMenu(event) {
		event.preventDefault();
		show({
			event: event,
			props: {
				key: "value",
			},
		});
	}

	return (
		<div
			className="uk-background-cover uk-background-muted screenHeight"
			style={{
				backgroundImage: `url(${currentWallpaper})`,
			}}
			onClick={changeScreenState}
			onContextMenu={handleContextMenu}
		>
			{(() => {
				if (showSignInPage) {
					return <SignInScreen isMac={isMac} />;
				} else {
					return <LockWallpaperScreen isMac={isMac} />;
				}
			})()}
			<DesktopContextMenu location={SCREENS.LOCK_SCREEN} />
		</div>
	);
}

export default LockScreen;
