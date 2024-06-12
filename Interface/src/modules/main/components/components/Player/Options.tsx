import { useContext } from "react";
import { QueueOff, QueueOn } from "../../../../../assets/Queue";
import { PlayerContext, SidebarContext } from "../../../../../context";
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