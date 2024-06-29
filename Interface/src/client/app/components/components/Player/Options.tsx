import { useContext } from "react";
// Assets
import { QueueOff, QueueOn } from "@assets/Queue";
// Context
import { PlayerContext, SidebarContext } from "@context";
// Components
import Volume from "./Volume";

export default function Options() {

    const { PlayerState } = useContext(PlayerContext);
    const { SidebarState, ModifySidebar } = useContext(SidebarContext);

    const handleSidebar = () => {
        PlayerState.Data.Title.length !== 0 && ModifySidebar({
            action: "Sidebar",
            value: SidebarState.Sidebar !== "Queue" ? "Queue" : ""
        })
    }

    return (
        <div id="Main-Player-Options">
            <Volume />
            <div id="Main-Player-Options-Separator"/>
            <button className="Main-Player-Controls-Button-Elements" onClick={handleSidebar}>
                {
                    (SidebarState.Sidebar === "Queue") && (PlayerState.Data.Title.length !== 0)
                    ? <QueueOn/>
                    : <QueueOff />
                }
            </button>
        </div>
    )
}