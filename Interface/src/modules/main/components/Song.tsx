import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pause, Play } from "../../../assets/Player";
import { PlayerContext } from "../../../context";
import { getDominantColor } from "../helpers";

interface SongProps {
    Id: number,
    Title: string,
    Artist: {
        URL: string,
        Name: string
    },
    Album: {
        URL: string,
        Name: string
    }
    imageURL: string
    URL: string
}

export default function Song({ Id, Title, Album, imageURL, Artist, URL }: SongProps) {

    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);
    const PlaylistCover = useRef<HTMLImageElement>(null!);

    const handleMusicPlayer = () => {

        if (Id !==PlayerState.Data.Id ) {
            ModifyPlayer({
                action: "Data",
                value: {
                    Id,
                    Src: URL,
                    Album: Album.Name,
                    AlbumURL: Album.URL,
                    Artist: Artist.Name,
                    ArtistURL: Artist.URL,
                    Cover: imageURL,
                    Name: Title
                }
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
            }, 300)
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
        useNavigate()(route)
    }

    return (
        <div className="Song">
            <div className="Song-Image">
                <img className="Song-Image-Element" src={imageURL} alt={Title} ref={PlaylistCover} width={170} height={170} onClick={() => handleNavigate(Album.URL)} />
                <button className="Song-Image-Play" onClick={handleMusicPlayer}>
                    {(Id === PlayerState.Data.Id && PlayerState.State)
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
                        ? <span className="Song-Details-Description">{Artist.Name}</span>
                        : <span className="Song-Details-Description">{Album.Name}</span>
                }
            </div>
        </div>
    )
}
