import { useNavigate } from "react-router-dom"
import { Pause, Play } from "../../../assets/Player"
import { ArtistList } from "../../../vite-env"
import { useContext } from "react"
import { PlayerContext } from "../../../context"

export default function Artist(props: ArtistList) {

    const { ImageURL, URL, Name, Visible = true } = props

    const { PlayerState } = useContext(PlayerContext);

    const navigate = useNavigate()

    const handleNavigate = (URL: string) => {
        if (URL.length > 0) {
            navigate(`/artist/${URL}`)
        }
        return
    }

    if (Visible === true) {
        return (
            <div className="Artist">
                <div className="Artist-Image">
                    <img className="Artist-Image-Element" src={ImageURL} alt={Name} width={170} height={170} onClick={() => handleNavigate(URL)} />
                    <button id="Artist-Image-Play" className="Artist-Image-Play" onClick={() => { }}>
                        {Name === PlayerState.Data.Artist.find(({ Name: NameObj }) => NameObj === Name )?.Name && PlayerState.State
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