import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Pause, Play } from "../../../assets/Player";
import { PlayerContext } from "../../../context";
import { getDominantColor } from "../helpers";
import { SongProps } from "../../../vite-env";

export default function Song(props: SongProps) {

    const { Id,  Title, Album, imageURL, Artist } = props

    const navigate = useNavigate()

    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);
    const PlaylistCover = useRef<HTMLImageElement>(null!);

    const handleMusicPlayer = () => {

        if (Id !== PlayerState.Data.Id) {
            ModifyPlayer({
                action: "Data",
                value: {
                    ...props
                }
            })
            ModifyPlayer({
                action: "Playlist",
                value: Title
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

    return (
        <div className="Song">
            <div className="Song-Image">
                <img className="Song-Image-Element" src={imageURL} alt={Title} ref={PlaylistCover} width={170} height={170} onClick={() => handleNavigate(Album.URL)} />
                <button id={`${PlayerState.Data.Id === Id && "Song-Image-Play-Active"}`} className="Song-Image-Play" onClick={handleMusicPlayer}>
                    {(Id === PlayerState.Data.Id && PlayerState.State) && PlayerState.Data.Album.Id === Album.Id
                        ? <Play />
                        : <Pause />}
                </button>
            </div>
            <div className="Song-Details">
                <span className="Song-Details-Title">
                    {Title}
                </span>
                {
                    Artist
                        ? <span className="Song-Details-Description">{Artist[0].Name}</span>
                        : <span className="Song-Details-Description">{Album.Name}</span>
                }
            </div>
        </div>
    )
}
