import { useContext, useEffect } from "react"
import { PlayerContext } from "../../../../context"
import { Link, useNavigate } from "react-router-dom";
import ArtistIcon from "../../../../assets/Artist";
import AlbumIcon from "../../../../assets/Album";

export default function NowPlaying() {

    const { PlayerState } = useContext(PlayerContext);

    const navigate = useNavigate()

    useEffect(() => {
        PlayerState.Data.Src.length === 0 && navigate("/")
    }, [])

    return (

        /* background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),
                  url("../../media/examples/lizard.png"); */
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
                            <span className="NowPlaying-Content-SongDetails-Description-Text">{PlayerState.Data.Artist}</span>
                        </Link>
                        <span className="NowPlaying-Content-SongDetails-Description-Separators">•</span>
                        <Link to={PlayerState.Data.AlbumURL}>
                            <AlbumIcon />
                            <span className="NowPlaying-Content-SongDetails-Description-Text">{PlayerState.Data.Album}</span>
                        </Link>
                        <span className="NowPlaying-Content-SongDetails-Description-Separators">•</span>
                        <span className="NowPlaying-Content-SongDetails-Description-Text">{PlayerState.Data.Year}</span>
                    </div>
                    <div id="NowPlaying-Content-SongGenres">
                        {
                            PlayerState.Data.Genres.length > 0 && PlayerState.Data.Genres.map(genre => <div className="NowPlaying-Content-SongGenres-Elements">{genre}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}