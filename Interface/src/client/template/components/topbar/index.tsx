// Components
import Buttons from "./components/Buttons"
import Controls from "./components/Controls"
import Links from "./components/Links"

// Constants
import { TopbarStyle } from "./constants"

// Styles
import "./index.css"

interface Props {
    LibraryStatus: string
}

export default function Topbar({ LibraryStatus }: Props) {

    const Layout = navigator.userAgent === "SpotifyClon" ? TopbarStyle.WinControls.true : TopbarStyle.WinControls.false

    return (
        <nav id="Topbar" style={Layout}>
            <Links LibraryStatus={LibraryStatus} />
            <Buttons />
            <Controls />
        </nav>
    )
}