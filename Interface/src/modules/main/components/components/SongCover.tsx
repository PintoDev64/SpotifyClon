import { useContext } from "react";

// Contexts
import { PlayerContext } from "../../../../context";
import { Link } from "react-router-dom";

export default function SongCover({ }) {

    const { PlayerState } = useContext(PlayerContext);

    return (
        <div id="Main-Player-Song">
            <img id="Main-Player-Song-Cover" src={PlayerState.Data.Cover} alt={PlayerState.Data.Name} />
            <div id="Main-Player-Song-Details">
                <span id="Main-Player-Song-Details-Name">{PlayerState.Data.Name}</span>
                <span className="Main-Player-Song-Details-Extra">
                    <Link to={PlayerState.Data.ArtistURL}>
                        {PlayerState.Data.Artist}
                    </Link>
                </span>
                <span className="Main-Player-Song-Details-Extra">
                    <Link to={PlayerState.Data.AlbumURL}>
                        {PlayerState.Data.Album}
                    </Link>
                </span>
            </div>
        </div>
    )
}