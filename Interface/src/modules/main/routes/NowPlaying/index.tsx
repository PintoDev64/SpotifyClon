import { useContext, useEffect } from "react"
import { PlayerContext } from "../../../../context"
import { Link, useNavigate } from "react-router-dom";
import ArtistIcon from "../../../../assets/Artist";
import AlbumIcon from "../../../../assets/Album";
import { Pause, Play } from "../../../../assets/Player";

export default function NowPlaying() {

    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);

    const navigate = useNavigate()

    useEffect(() => {
        PlayerState.Data.Src.length === 0 && navigate("/")
    }, [])

    const handlePlay = () => {
        ModifyPlayer({
            action: "State",
            value: !PlayerState.State
        })
    }

    return (
        <div id="NowPlaying" style={{
            backgroundImage: `linear-gradient(rgba(2, 2, 2, 0.60), rgba(2, 2, 2, 0.60)), url("${PlayerState.Data.Cover}")`,
        }}>
            <div id="NowPlaying-Content">
                <div id="NowPlaying-Content-Image">
                    <img src={PlayerState.Data.Cover} alt={PlayerState.Data.Name} width={500} height={500} />
                </div>
                <div id="NowPlaying-Content-SongDetails">
                    <h1 id="NowPlaying-Content-SongDetails-Name">
                        {PlayerState.Data.Name}
                    </h1>
                    <div id="NowPlaying-Content-SongDetails-Description">
                        <Link to={PlayerState.Data.ArtistURL}>
                            <ArtistIcon />
                            <span className="NowPlaying-Content-SongDetails-Description-Text">{PlayerState.Data.Artist[0]?.Name}</span>
                        </Link>
                        <span className="NowPlaying-Content-SongDetails-Description-Separators">•</span>
                        <Link to={PlayerState.Data.AlbumURL}>
                            <AlbumIcon />
                            <span className="NowPlaying-Content-SongDetails-Description-Text">{PlayerState.Data.Album}</span>
                        </Link>
                        <span className="NowPlaying-Content-SongDetails-Description-Separators">•</span>
                        <span className="NowPlaying-Content-SongDetails-Description-Text">{PlayerState.Data.Year}</span>
                    </div>
                    <div id="NowPlaying-Content-Options">
                        <button id="NowPlaying-Content-Options-Play" onClick={handlePlay}>
                            {
                                PlayerState.State
                                ? <Play />
                                : <Pause />
                            }
                        </button>
                    </div>
                    <div id="NowPlaying-Content-SongGenres">
                        {
                            PlayerState.Data.Genres.length > 0 && PlayerState.Data.Genres.map(genre => <div className="NowPlaying-Content-SongGenres-Elements">{genre}</div>)
                        }
                    </div>
                    <div id="NowPlaying-Content-Artist">
                        {
                            PlayerState.Data.Artist.length > 0 && PlayerState.Data.Artist.map(({ ImageURL, Name, URL, Role }) =>
                                <Link to={URL}>
                                    <div className="NowPlaying-Content-Artist-Element">
                                        <img src={ImageURL} alt={Name} className="NowPlaying-Content-Artist-Element-Image" />
                                        <div className="NowPlaying-Content-Artist-Element-Details">
                                            <p>{ Name }</p>
                                            <span>
                                                {
                                                    Role.map((value, index) => `${((Role.length > 1) && index > 0) ? ", " : ""}${value}`)
                                                }
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}