import { useContext } from "react";
import { Link } from "react-router-dom";
// Contexts
import { PlayerContext } from "@context";
// Hooks
import { useNavigationPanel, usePathTool } from "@hooks";

export default function SongCover() {
    // Hooks
    const { Include } = usePathTool()
    const { backward } = useNavigationPanel()
    // Context
    const { PlayerState } = useContext(PlayerContext);

    return (
        <div id="Main-Player-Song">
            {
                Include("/now-playing")
                    ? <button onClick={backward}>
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
                        Include("/now-playing")
                            ? <button onClick={backward} id={PlayerState.Data.Title ? "Main-Player-Song-Details-Name-Link" : "Main-Player-Song-Details-Name-Link-Replace"}>
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