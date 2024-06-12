import { useContext } from "react";

// Contexts
import { PlayerContext } from "../../../../../context";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SongCover() {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const { PlayerState } = useContext(PlayerContext);

    return (
        <div id="Main-Player-Song">
            {
                pathname.includes("/now-playing")
                    ? <button onClick={() => navigate(-1)}>
                        <img id="Main-Player-Song-Cover" src={PlayerState.Data.imageURL} alt={PlayerState.Data.Title} />
                    </button>
                    : <Link to="/now-playing">
                        <img id="Main-Player-Song-Cover" src={PlayerState.Data.imageURL} alt={PlayerState.Data.Title} />
                    </Link>
            }
            <div id="Main-Player-Song-Details">
                <span id="Main-Player-Song-Details-Name">
                    {
                        pathname.includes("/now-playing")
                            ? <button onClick={() => navigate(-1)}>
                                {PlayerState.Data.Title}
                            </button>
                            : <Link to="/now-playing">
                                {PlayerState.Data.Title}
                            </Link>}
                </span>
                <span className="Main-Player-Song-Details-Extra">
                    <Link to={PlayerState.Data.Artist[0].URL}>
                        {PlayerState.Data.Artist[0].Name}
                    </Link>
                </span>
                <span className="Main-Player-Song-Details-Extra">
                    <Link to={PlayerState.Data.Album.URL}>
                        {PlayerState.Data.Album.Name}
                    </Link>
                </span>
            </div>
        </div>
    )
}