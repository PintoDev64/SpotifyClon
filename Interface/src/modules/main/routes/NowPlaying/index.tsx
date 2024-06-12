import { useContext, useEffect, useRef, useState } from "react"
import { PlayerContext, QueueContext } from "../../../../context"
import { Link, useNavigate } from "react-router-dom";
import ArtistIcon from "../../../../assets/Artist";
import AlbumIcon from "../../../../assets/Album";
import { Pause, Play } from "../../../../assets/Player";
import { AddToQueue } from "../../../../assets/Queue";
import Lirycs from "./components/Lirycs";

export default function NowPlaying() {

    const [Section, setSection] = useState<"Lirycs" | "Credits">("Lirycs")

    const { QueueState, ModifyQueue } = useContext(QueueContext);
    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);

    const NowPlayingRef = useRef<HTMLDivElement>(null!)
    const Content = useRef<HTMLDivElement>(null!)
    const DownDetails = useRef<HTMLDivElement>(null!)

    const navigate = useNavigate()

    useEffect(() => {
        PlayerState.Data.Lirycs?.length === 0 ? setSection("Credits") : setSection("Lirycs")
        PlayerState.Data.URL.length === 0 && navigate("/")
    }, [PlayerState.Data.URL])

    useEffect(() => {
        DownDetails.current.style.height = `${NowPlayingRef.current.offsetHeight - 50}px`
    }, [])


    const handlePlay = () => {
        ModifyPlayer({
            action: "State",
            value: !PlayerState.State
        })
    }

    const handleAddToQueue = () => {
        ModifyQueue({
            action: "List",
            value: [...QueueState.List, { ...PlayerState.Data }]
        })
    }

    const SectionsList = [{
        Condition: PlayerState.Data.Lirycs.length !== 0,
        Id: Section === "Lirycs" ? "NowPlaying-Content-DownDetails-Navbar-Selected" : "",
        Text: "Lirycs",
        Function: () => Section !== "Lirycs" && setSection("Lirycs")
    }, {
        Condition: true,
        Id: Section === "Credits" ? "NowPlaying-Content-DownDetails-Navbar-Selected" : "",
        Text: "Credits",
        Function: () => Section !== "Credits" && setSection("Credits")
    }]

    return (
        <div id="NowPlaying" style={{
            backgroundImage: `linear-gradient(rgba(2, 2, 2, 0.60), rgba(2, 2, 2, 0.60)), url("${PlayerState.Data.imageURL}")`,
        }} ref={NowPlayingRef}>
            <div id={PlayerState.Data.Lirycs?.length !== 0 ? "NowPlaying-Content" : "NowPlaying-Content-NoLirycs"} ref={Content}>
                <div id="NowPlaying-Content-TopDetails">
                    <div id={(Content.current?.offsetWidth > 1050) ? "NowPlaying-Content-Image" : "NowPlaying-Content-ImageSmall"}>
                        <img src={PlayerState.Data.imageURL} alt={PlayerState.Data.Title} width={500} height={500} />
                    </div>
                    <div id="NowPlaying-Content-SongDetails">
                        <h1 id="NowPlaying-Content-SongDetails-Name">
                            {PlayerState.Data.Title}
                        </h1>
                        <div id="NowPlaying-Content-SongDetails-Description">
                            <Link to={PlayerState.Data.Artist[0]?.URL}>
                                <ArtistIcon />
                                <span className="NowPlaying-Content-SongDetails-Description-Text">{PlayerState.Data.Artist[0]?.Name}</span>
                            </Link>
                            <span className="NowPlaying-Content-SongDetails-Description-Separators">•</span>
                            <Link to={PlayerState.Data.Album.URL}>
                                <AlbumIcon />
                                <span className="NowPlaying-Content-SongDetails-Description-Text">{PlayerState.Data.Album.Name}</span>
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
                            <button id="NowPlaying-Content-Options-Play" onClick={handleAddToQueue}>
                                <AddToQueue />
                            </button>
                        </div>
                        <div id="NowPlaying-Content-SongGenres">
                            {
                                PlayerState.Data.Genres.length > 0 && PlayerState.Data.Genres.map((genre, index) => <div key={index}  className="NowPlaying-Content-SongGenres-Elements">{genre}</div>)
                            }
                        </div>
                        <div id="NowPlaying-Content-Artist">
                            {
                                PlayerState.Data.Artist.length > 0 && PlayerState.Data.Artist.map(({ ImageURL, Name, URL, Role }, index) =>
                                    <Link to={URL} key={index}>
                                        <div className="NowPlaying-Content-Artist-Element">
                                            <img src={ImageURL} alt={Name} className="NowPlaying-Content-Artist-Element-Image" />
                                            <div className="NowPlaying-Content-Artist-Element-Details">
                                                <p>{Name}</p>
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
                <div id="NowPlaying-Content-DownDetails" ref={DownDetails}>
                    <ul id="NowPlaying-Content-DownDetails-Navbar">
                        {SectionsList.map(({ Condition, Id, Text, Function }, index) => Condition && <li key={index} id={Id} className="NowPlaying-Content-DownDetails-Navbar-Options" onClick={Function}>
                            {Text}
                        </li>)}
                    </ul>
                    {(Section === "Lirycs" && PlayerState.Data.Lirycs?.length !== 0) && <Lirycs />}
                </div>
            </div>
        </div>
    )
}