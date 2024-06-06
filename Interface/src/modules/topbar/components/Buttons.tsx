import { Link, useLocation } from "react-router-dom";

// Assets
import { NotificationClose, NotificationOpen } from "../../../assets/Notifications";
import ProfilePicture from '../../../assets/ProfilePicture.png'
import { SettingsClose, SettingsOpen } from "../../../assets/Settings";
import Prmeiun from "../../../assets/Premiun";
import { FriendsClose, FriendsOpen } from "../../../assets/Friends";

export default function Buttons() {

    console.log();

    return (
        <div id="Topbar-Buttons">
            <a href="https://www.spotify.com/premium/" target="_blank" id="Topbar-Buttons-Premiun">
                <Prmeiun />
                Premiun
            </a>
            <Link to="notifications" className="Topbar-Buttons-Buttons">
                {
                    useLocation().pathname !== '/notifications' ? <NotificationClose /> : <NotificationOpen />
                }
            </Link>
            <Link to="friends" className="Topbar-Buttons-Buttons">
                {
                    useLocation().pathname !== '/friends' ? <FriendsClose /> : <FriendsOpen />
                }
            </Link>
            <Link to="settings" className="Topbar-Buttons-Buttons">
                {
                    useLocation().pathname !== '/settings' ? <SettingsClose /> : <SettingsOpen />
                }
            </Link>
            <Link to="user" className="Topbar-Buttons-Buttons">
                <img src={ProfilePicture} alt="ProfilePictureAccount" className={`Topbar-Buttons-Buttons-ProfilePictureAccount ${useLocation().pathname === '/user' && "ProfilePictureAccountSelect"}`} />
            </Link>
        </div>
    )
}