// Components
import Buttons from "./components/Buttons"
import Controls from "./components/Controls"
import Links from "./components/Links"

// Styles
import "./index.css"

export default function Topbar() {
    return (
        <nav id="Topbar">
            <Links />
            <Buttons />
            <Controls />
        </nav>
    )
}