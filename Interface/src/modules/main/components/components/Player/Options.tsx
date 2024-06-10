import { useContext } from "react";
import { QueueOff, QueueOn } from "../../../../../assets/Queue";
import { SidebarContext } from "../../../../../context";

export default function Options() {

    const { SidebarState, ModifySidebar } = useContext(SidebarContext);

    const handleSidebar = () => {
        ModifySidebar({
            action: "Sidebar",
            value: SidebarState.Sidebar !== "Queue" ? "Queue" : ""
        })
    }

    return (
        <div id="Main-Player-Options">
            <button className="Main-Player-Controls-Button-Elements" onClick={handleSidebar}>
                {
                    SidebarState.Sidebar === "Queue"
                    ? <QueueOn/>
                    : <QueueOff />
                }
            </button>
        </div>
    )
}