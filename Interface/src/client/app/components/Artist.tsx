import { Pause, Play } from "@assets/Player"
import { ArtistList } from "@types"
import { useContext } from "react"
import { PlayerContext } from "@context"
import { useNavigationPanel } from "@hooks"

export default function Artist(props: ArtistList) {
    // Component Properties
    const { ImageURL, URL, Name, Visible = true } = props
    // Context
    const { PlayerState } = useContext(PlayerContext);
    // Hooks
    const { goTo } = useNavigationPanel()

    const ArtistName = PlayerState.Data.Artist.find(({ Name: NameObj }) => NameObj === Name)

    // Component
    if (Visible === true) {
        return (
            <div className="Artist">
                <div className="Artist-Image">
                    <img className="Artist-Image-Element" src={ImageURL} alt={Name} width={170} height={170} onClick={() => goTo(URL)} />
                    <button id="Artist-Image-Play" className="Artist-Image-Play" onClick={() => { }}>
                        {Name === ArtistName?.Name && PlayerState.State
                            ? <Play />
                            : <Pause />}
                    </button>
                </div>
                <div className="Artist-Details">
                    <span className="Artist-Details-Title">
                        {Name}
                    </span>
                    <span className="Artist-Details-Description">Artist</span>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}