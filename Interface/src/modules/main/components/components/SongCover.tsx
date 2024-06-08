import { useContext } from "react";

// Contexts
import { PlayerContext } from "../../../../context";
import { Link } from "react-router-dom";

export default function SongCover({ }) {

    const { PlayerState } = useContext(PlayerContext);

    return (
        <div id="Main-Player-Song">
            <img id="Main-Player-Song-Cover" src={PlayerState.Cover} alt={PlayerState.Name} />
            <div id="Main-Player-Song-Details">
                <span id="Main-Player-Song-Details-Name">{PlayerState.Name}</span>
                <span className="Main-Player-Song-Details-Extra">
                    <Link to={PlayerState.ArtistURL}>
                        {PlayerState.Artist}
                    </Link>
                </span>
                <span className="Main-Player-Song-Details-Extra">
                    <Link to={PlayerState.AlbumURL}>
                        {PlayerState.Album}
                    </Link>
                </span>
            </div>
        </div>
    )
}