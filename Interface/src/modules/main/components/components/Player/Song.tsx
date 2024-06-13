import { useContext } from "react";

// Contexts
import { PlayerContext } from "../../../../../context";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SongCover() {

    const { pathname } = useLocation();

    const { PlayerState } = useContext(PlayerContext);

    return (
        <div id="Main-Player-Song">
            {
                pathname.includes("/now-playing")
                    ? <button onClick={() => {}}>
                        {
                            PlayerState.Data.imageURL
                                ? <img id="Main-Player-Song-Cover" src={PlayerState.Data.imageURL} alt={PlayerState.Data.Title} />
                                : <div id="Main-Player-Song-Cover-Replace" />
                        }
                    </button>
                    : <Link to="/now-playing">
                        {
                            PlayerState.Data.imageURL
                                ? <img id="Main-Player-Song-Cover" src={PlayerState.Data.imageURL} alt={PlayerState.Data.Title} />
                                : <div id="Main-Player-Song-Cover-Replace" />
                        }
                    </Link>
            }
            <div id="Main-Player-Song-Details">
                <span id="Main-Player-Song-Details-Name">
                    {
                        pathname.includes("/now-playing")
                            ? <button onClick={() => {}} id={PlayerState.Data.Title ? "Main-Player-Song-Details-Name-Link" : "Main-Player-Song-Details-Name-Link-Replace"}>
                                {PlayerState.Data.Title ? PlayerState.Data.Title : ""}
                            </button>
                            : <Link to="/now-playing" id={PlayerState.Data.Title ? "Main-Player-Song-Details-Name-Link" : "Main-Player-Song-Details-Name-Link-Replace"}>
                                {PlayerState.Data.Title ? PlayerState.Data.Title : ""}
                            </Link>}
                </span>
                <span className="Main-Player-Song-Details-Extra">
                    {
                        <Link
                            className={PlayerState.Data.Artist[0]?.URL ? "Main-Player-Song-Details-Extra" : "Main-Player-Song-Details-Extra-Replace"}
                            to={PlayerState.Data.Artist[0]?.URL ? `/artist/${PlayerState.Data.Artist[0].URL}` : ""}>
                            {PlayerState.Data.Artist[0]?.Name ? PlayerState.Data.Artist[0].Name : ""}
                        </Link>
                    }
                </span>
                <span className="Main-Player-Song-Details-Extra">
                    {
                        <Link
                            className={PlayerState.Data.Album?.URL ? "Main-Player-Song-Details-Extra" : "Main-Player-Song-Details-Extra-Replace"}
                            to={PlayerState.Data.Album?.URL ? PlayerState.Data.Album.URL : ""}>
                            {PlayerState.Data.Album?.Name ? PlayerState.Data.Album.Name : ""}
                        </Link>
                    }
                </span>
            </div>
        </div>
    )
}