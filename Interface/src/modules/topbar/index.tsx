// Components
import Buttons from "./components/Buttons"
import Controls from "./components/Controls"
import Links from "./components/Links"

// Constants
import { TopbarStyle } from "./constants"

// Styles
import "./index.css"

export default function Topbar() {
    return (
        <nav id="Topbar" style={
            navigator.userAgent === "SpotifyClon"
                ? TopbarStyle.WinControls.true
                : TopbarStyle.WinControls.false
        }>
            <Links />
            <Buttons />
            <Controls />
        </nav>
    )
}