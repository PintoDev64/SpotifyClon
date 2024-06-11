import { useContext } from "react";

// Contexts
import { PlayerContext } from "../../../../../context";
import { Link } from "react-router-dom";

export default function SongCover({ }) {

    const { PlayerState } = useContext(PlayerContext);

    return (
        <div id="Main-Player-Song">
            <Link to="/now-playing">
                <img id="Main-Player-Song-Cover" src={PlayerState.Data.imageURL} alt={PlayerState.Data.Title} />
            </Link>
            <div id="Main-Player-Song-Details">
                <span id="Main-Player-Song-Details-Name">
                    <Link to="/now-playing">
                        {PlayerState.Data.Title}
                    </Link>
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