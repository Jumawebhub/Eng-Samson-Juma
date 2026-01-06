import { IconButton } from "@fluentui/react";
import React from "react";
import windows_10 from "../assets/images/baseImages/windows_10.svg";
import { useDispatch } from "react-redux";
import { setSystemState } from "../utils/actions/system.action";
import SocialBlock from "../components/base/socialBlock";

import { useSelector } from "react-redux";
import { OS_TYPES } from "../utils/documents/enums";

function ShutDown() {
	const selectedOS = useSelector((state) => state.systemState.selectedOS);
	const isMac = selectedOS === OS_TYPES.MACOS;
	const dispatch = useDispatch();
	const setNextSystemState = (systemState) => {
		dispatch(setSystemState(systemState));
	};

	return (
		<div className={`screenHeight ${isMac ? 'macos-shutdown' : 'uk-background-secondary'}`}>
			<div className="uk-position-center uk-flex uk-flex-column uk-text-center">
				<div>
					{!isMac ? (
						<img
							src={windows_10}
							width="200"
							height="200"
							alt="Windows Icon"
							className="uk-img uk-margin-small-right"
						/>
					) : (
						<div className="macos-shutdown-icon uk-margin-bottom">
							<i className="ms-Icon ms-Icon--Apple" aria-hidden="true" style={{ fontSize: '120px', color: 'white' }}></i>
						</div>
					)}
				</div>
				<div>
					<IconButton
						iconProps={{ iconName: "PowerButton" }}
						title="Power On"
						ariaLabel="Power On"
						className="power-button"
						onClick={() => setNextSystemState("isLocked")}
					/>
				</div>
				{isMac && <div className="uk-margin-top font-color-white">Click to startup</div>}
			</div>
			<div className="uk-position-bottom-center">
				<SocialBlock />
			</div>
		</div>
	);
}

export default ShutDown;
