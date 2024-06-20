import { useContext } from "react";
import { Link } from "react-router-dom";
// Assets
import { NotificationClose, NotificationOpen } from "@assets/Notifications";
import { SettingsClose, SettingsOpen } from "@assets/Settings";
import Prmeiun from "@assets/Premiun";
import { FriendsClose, FriendsOpen } from "@assets/Friends";
// Context
import { SidebarContext } from "@context";
import { usePathTool } from "@hooks";

export default function Buttons() {

    const { IsNot, Is } = usePathTool();

    const { SidebarState, ModifySidebar } = useContext(SidebarContext);

    return (
        <div id="Topbar-Buttons">
            <a href="https://www.spotify.com/premium/" target="_blank" id="Topbar-Buttons-Premiun">
                <Prmeiun />
            </a>
            <Link to="/notifications" className="Topbar-Buttons-Buttons">
                <>
                    {IsNot('/notifications') ? <NotificationClose /> : <NotificationOpen />}
                </>
            </Link>
            <button className="Topbar-Buttons-Buttons" onClick={() => ModifySidebar({
                action: "Sidebar",
                value: SidebarState.Sidebar !== "Friends" ? "Friends" : ""
            })}>
                <>
                    {SidebarState.Sidebar !== "Friends" ? <FriendsClose /> : <FriendsOpen />}
                </>
            </button>
            <Link to="settings" className="Topbar-Buttons-Buttons">
                <>
                    {IsNot('/settings') ? <SettingsClose /> : <SettingsOpen />}
                </>
            </Link>
            <Link to="user" className="Topbar-Buttons-Buttons">
                <img
                    src="/ProfilePicture.png"
                    alt="ProfilePictureAccount"
                    className={`Topbar-Buttons-Buttons-ProfilePictureAccount ${Is('/user') && "ProfilePictureAccountSelect"}`} />
            </Link>
        </div>
    )
}