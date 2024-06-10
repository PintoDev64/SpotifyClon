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

export default function Playlist({ Id, Songs, Title, imageURL, Description, URL }: PlaylistProps) {

    const { ModifyQueue } = useContext(QueueContext);
    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);
    const [DominantColor, setDominantColor] = useState<string>()

    const navigate = useNavigate()

    const PlaylistCover = useRef<HTMLImageElement>(null!);

    const handleMusicPlayer = () => {

        if ((Songs[0].Id !== PlayerState.Data.Id) && (PlayerState.Data.AlbumId !== Id)) {
            ModifyPlayer({
                action: "Data",
                value: {
                    Id: Songs[0].Id,
                    Src: Songs[0].URL,
                    Album: Title,
                    AlbumId: Id,
                    AlbumURL: URL,
                    Artist: Songs[0].Artist,
                    ArtistURL: Songs[0].Artist[0].URL,
                    Cover: Songs[0].imageURL,
                    Name: Songs[0].Title,
                    Year: Songs[0].Year,
                    Genres: Songs[0].Genres
                }
            })
            ModifyQueue({
                action: "List",
                value: Songs.slice(1, (Songs.length))
            })
            setTimeout(() => {
                if (PlayerState.State) {
                    ModifyPlayer({ action: "State", value: false })
                    setTimeout(() => {
                        ModifyPlayer({ action: "State", value: true })
                    }, 100);
                } else {
                    ModifyPlayer({ action: "State", value: true })
                }
            }, 100)
            getDominantColor(imageURL)
                .then(value => ModifyPlayer({
                    action: "DominantColor",
                    value
                }))
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
                <img className="Playlist-Image-Element" src={imageURL} alt={Title} ref={PlaylistCover} width={170} height={170} onClick={() => handleNavigate(URL)}/>
                <button id={`${PlayerState.Data.AlbumId === Id && "Playlist-Image-Play-Active"}`} className="Playlist-Image-Play" onClick={handleMusicPlayer}>
                    {(Id === PlayerState.Data.AlbumId && PlayerState.State)
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
