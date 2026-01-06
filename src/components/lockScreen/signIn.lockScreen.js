import React from "react";
import "./lockScreen.scss";
import { setSystemState } from "../../utils/actions/system.action";
import { useDispatch } from "react-redux";
import avatar from "../../assets/images/baseImages/default_avatar.svg";
import { Icon, PrimaryButton, TextField } from "@fluentui/react";
import SocialBlock from "../base/socialBlock";

function SignInScreen({ isMac }) {
	const dispatch = useDispatch();
	const setNextSystemState = (systemState) => {
		dispatch(setSystemState(systemState));
	};

	return (
		<div className={`screenHeight SignInOverlay ${isMac ? 'macos-signin' : 'windows-signin'}`}>
			{/* Sign In Form */}
			<div className="uk-position-center uk-overlay uk-text-center">
				<div>
					<img
						className="uk-border-circle"
						src={avatar}
						width={isMac ? "120" : "200"}
						height={isMac ? "120" : "200"}
						alt="User"
					/>
				</div>
				<div>
					<h1 className={`${isMac ? 'uk-text-lead' : 'uk-heading-small'} font-color-white uk-margin-small-top`}>
						Samson Juma
					</h1>
				</div>
				<div className={isMac ? 'macos-input-container' : ''}>
					<TextField
						placeholder={isMac ? "Enter Password" : "Enter Any Pin"}
						type="password"
						canRevealPassword={!isMac}
						revealPasswordAriaLabel="Show password"
					/>
				</div>
				<div className="uk-margin-small-top">
					<PrimaryButton
						text={isMac ? "Login" : "Sign In"}
						allowDisabledFocus
						onClick={() => setNextSystemState("isDesktop")}
					/>
				</div>
			</div>

			{isMac && (
				<div className="macos-signin-footer uk-position-bottom uk-padding-large uk-flex uk-flex-center">
					<div className="footer-item" onClick={() => setNextSystemState("isShutDown")}>
						<div className="footer-icon-circle"><i className="ms-Icon ms-Icon--PowerButton"></i></div>
						<span>Sleep</span>
					</div>
					<div className="footer-item" onClick={() => window.location.reload()}>
						<div className="footer-icon-circle"><i className="ms-Icon ms-Icon--Refresh"></i></div>
						<span>Restart</span>
					</div>
					<div className="footer-item" onClick={() => setNextSystemState("isShutDown")}>
						<div className="footer-icon-circle"><i className="ms-Icon ms-Icon--PowerButton"></i></div>
						<span>Shut Down</span>
					</div>
				</div>
			)}

			{/* Windows LockScreenIcons */}
			{!isMac && (
				<div className="uk-position-bottom-right uk-overlay uk-flex uk-flex-column">
					<div className="font-color-white uk-text-lead">
						<Icon iconName="WifiEthernet" />
					</div>
				</div>
			)}

			{/* Social Links */}
			{!isMac && (
				<div className="uk-position-bottom-left uk-overlay uk-flex uk-flex-column">
					<SocialBlock />
				</div>
			)}
		</div>
	);
}

export default SignInScreen;
