// Assets
import Close from "@assets/Close";
import Hide from "@assets/Hide";
import Maximize from "@assets/Maximize";
// Helpers
import { WindowControls } from "@helpers";

export default function Controls() {

    const { MaximizeWindow, CloseWindow, MinimizeWindow } = WindowControls()

    if (navigator.userAgent === "SpotifyClon")
        return (
            <div id="Topbar-WinControls">
                <button id="Topbar-WinControls-Hide" className="Topbar-WinControls-Buttons"
                    onClick={MinimizeWindow}
                >
                    <Hide />
                </button>
                <button id="Topbar-WinControls-Maximize" className="Topbar-WinControls-Buttons"
                    onClick={MaximizeWindow}
                >
                    <Maximize />
                </button>
                <button id="Topbar-WinControls-Close" className="Topbar-WinControls-Buttons"
                    onClick={CloseWindow}
                >
                    <Close />
                </button>
            </div>
        )
    else return (
        <></>
    )
}