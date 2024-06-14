// Helpers
import { getDominantColor } from "../helpers"

// Types
import { MouseEvent, useContext, useEffect, useRef, useState } from "react"

// Styles
import './index.css'
import { Link, useNavigate } from "react-router-dom"
import { PlayerContext, QueueContext } from "../../../context"
import { PlaylistProps } from "../../../vite-env"
import { Pause, Play } from "../../../assets/Player"
import Song from "./Song"

export default function Playlist(props: PlaylistProps) {

    const { Id, Songs, Title, imageURL, Description, URL } = props

    const { ModifyQueue } = useContext(QueueContext);
    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);
    const [DominantColor, setDominantColor] = useState<string>()

    const PlaylistCover = useRef<HTMLImageElement>(null!);

    const navigate = useNavigate()

    const handleMusicPlayer = () => {

        if ((Songs[0].Id !== PlayerState.Data.Id) && (PlayerState.Data.Album.Id !== Id)) {
            ModifyPlayer({
                action: "Data",
                value: {
                    ...props.Songs[0]
                }
            })
            ModifyPlayer({
                action: "Playlist",
                value: Title
            })
            setTimeout(() => ModifyPlayer({
                action: "CurrentTime",
                value: 0
            }), 100)
            ModifyQueue({
                action: "List",
                value: Songs.slice(1, (Songs.length))
            })
            if (PlayerState.State) {
                ModifyPlayer({ action: "State", value: false })
                setTimeout(() => {
                    ModifyPlayer({ action: "State", value: true })
                }, 100);
            } else {
                ModifyPlayer({ action: "State", value: true })
            }
        } else {
            ModifyPlayer({ action: "State", value: !PlayerState.State })
        }
    }

    const handleNavigate = (route: string) => {
        navigate(route)
    }

    useEffect(() => {
        getDominantColor(imageURL)
            .then((value) => setDominantColor(value));
    }, [])

    return (
        <div className="Playlist">
            <div className="Playlist-Image">
                <div className="Playlist-Image-DominantColor_Top" style={{ background: DominantColor }} />
                <div className="Playlist-Image-DominantColor_Middle" style={{ background: DominantColor }} />
                <img className="Playlist-Image-Element" src={imageURL} alt={Title} ref={PlaylistCover} width={170} height={170} onClick={() => handleNavigate(URL)} />
                <button id={`${PlayerState.Data.Album.Id === Id && "Playlist-Image-Play-Active"}`} className="Playlist-Image-Play" onClick={handleMusicPlayer}>
                    {(Id === PlayerState.Data.Album.Id && PlayerState.State)
                        ? <Play />
                        : <Pause />}
                </button>
            </div>
            <div className="Playlist-Details" onClick={() => handleNavigate(URL)}>
                <span className="Playlist-Details-Title">
                    {Title}
                </span>
                {
                    Description && <span className="Playlist-Details-Description">{Description}</span>
                }
            </div>
        </div>
    )
}
