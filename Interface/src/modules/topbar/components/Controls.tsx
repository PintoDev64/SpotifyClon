import Close from "../../../assets/Close";
import Hide from "../../../assets/Hide";
import Maximize from "../../../assets/Maximize";

export default function Controls() {
    return (
        <div id="Topbar-WinControls">
            <button id="Topbar-WinControls-Hide" className="Topbar-WinControls-Buttons">
                <Hide />
            </button>
            <button id="Topbar-WinControls-Maximize" className="Topbar-WinControls-Buttons">
                <Maximize />
            </button>
            <button id="Topbar-WinControls-Close" className="Topbar-WinControls-Buttons">
                <Close />
            </button>
        </div>
    )
}