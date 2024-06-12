import { useContext, useEffect, useState } from "react"
import { PLAYLIST_EXAMPLES } from "../../constants"
import { Link, useNavigate, useParams } from "react-router-dom"
import { PlaylistProps } from "../../../../vite-env"
import ArtistIcon from "../../../../assets/Artist"
import AlbumIcon from "../../../../assets/Album"
import { formatTime, getDominantColor } from "../../helpers"
import { PlayerContext, QueueContext } from "../../../../context"

export default function PlaylistPage() {

    const { ModifyQueue } = useContext(QueueContext);
    const { ModifyPlayer } = useContext(PlayerContext);

    const { playlist } = useParams<{ playlist: string }>()
    const navigate = useNavigate()

    const [Data, setData] = useState<PlaylistProps>()
    const [DominantColor, setDominantColor] = useState<string>()

    console.log(playlist);

    useEffect(() => {
        const data = PLAYLIST_EXAMPLES[PLAYLIST_EXAMPLES.findIndex(({ Id }) => Id === playlist)]
        if (data.Title.length !== 0) {
            setData(data)
        } else {
            navigate("/")
        }
    }, [])

    const handlePlayerSong = (index: number) => {
        ModifyPlayer({
            action: "Data",
            value: {
                ...Data?.Songs[index]!
            }
        })
        ModifyQueue({
            action: "List",
            value: [...Data?.Songs!].splice(index + 1, Data?.Songs?.length)
        })
        ModifyPlayer({ action: "State", value: true })
    }

    useEffect(() => {
        getDominantColor(Data?.imageURL!, 30)
        .then(value => setDominantColor(value))
    }, [Data?.imageURL])

    return (
        <div id="Playlist" style={{
            background: `linear-gradient(${DominantColor} 0%, var(--BgMain) 100%)`
        }}>
            <div id="Playlist-Content">
                <div id="Playlist-Content-Details">
                    <h1 id="Playlist-Content-Details-Name">{Data?.Title}</h1>
                    <p id="Playlist-Content-Details-Description">{Data?.Description}</p>
                    <div id="Playlist-Content-SongDetails-Description">
                        <Link to={Data?.Artist?.URL!}>
                            <ArtistIcon />
                            <span className="Playlist-Content-SongDetails-Description-Text">{Data?.Artist?.Name}
                            </span>
                        </Link>
                        <span className="Playlist-Content-SongDetails-Description-Separators">
                            •
                        </span>
                        <span className="Playlist-Content-SongDetails-Description-Text">
                            {Data?.Year}
                        </span>
                        <span className="Playlist-Content-SongDetails-Description-Separators">
                            •
                        </span>
                        <span className="Playlist-Content-SongDetails-Description-Text">
                            {Data?.Songs?.length} Songs
                        </span>
                    </div>
                </div>
                <div id="Playlist-Content-List">
                    <div id="Playlist-Content-List-Header">
                        <div id="Playlist-Content-List-Header-Number">#</div>
                        <div id="Playlist-Content-List-Header-Title">Title</div>
                        <div id="Playlist-Content-List-Header-Duration">Duration</div>
                    </div>
                    <ul id="Playlist-Content-List-Content">
                        {
                            Data?.Songs.map(({ Title, Artist, Duration }, index) =>
                                <li key={index} className="Playlist-Content-List-Content-Element"
                                    onDoubleClick={() => handlePlayerSong(index)}
                                >
                                    <p className="Playlist-Content-List-Content-Element-Number">{index + 1}</p>
                                    <div className="Playlist-Content-List-Content-Element-Data">
                                        <span>{Title}</span>
                                        <small>
                                            {
                                                Artist.map(({ Name, URL }) =>
                                                    <Link to={URL}>
                                                        {`${((Artist.length > 1) && index > 0) ? ", " : ""}${Name}`}
                                                    </Link>
                                                )
                                            }
                                        </small>
                                    </div>
                                    <p className="Playlist-Content-List-Content-Element-Duration">
                                        {formatTime(Duration)}
                                    </p>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
            <div id="Playlist-Sidebar">
                <img src={Data?.imageURL} alt="" />
                <div id="Playlist-Sidebar-SongGenres">
                    {
                        Data?.Songs?.length! > 0 && Data?.Songs?.map(({ Genres }) =>
                            Genres?.map(value =>
                                <div className="Playlist-Sidebar-SongGenres-Elements">{value}</div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}