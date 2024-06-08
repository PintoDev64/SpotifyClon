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
    return (
        <nav id="Topbar" style={
            navigator.userAgent === "SpotifyClon"
                ? TopbarStyle.WinControls.true
                : TopbarStyle.WinControls.false
        }>
            <Links LibraryStatus={LibraryStatus}/>
            <Buttons />
            <Controls />
        </nav>
    )
}