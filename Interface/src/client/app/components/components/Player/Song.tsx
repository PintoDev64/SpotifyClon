import { useContext } from "react";
import { Link } from "react-router-dom";
// Contexts
import { PlayerContext } from "@context";
// Hooks
import { useNavigationPanel, usePathTool } from "@hooks";

export default function SongCover() {
    // Hooks
    const { IsNot, Is } = usePathTool()
    const { backward } = useNavigationPanel()
    // Context
    const { PlayerState } = useContext(PlayerContext);

    return (
        <div id="Main-Player-Song">
            {
                IsNot("/now-playing") && PlayerState.Data.Id
                    ? <Link to="/now-playing">
                        {
                            PlayerState.Data.imageURL
                                ? <img id="Main-Player-Song-Cover" src={PlayerState.Data.imageURL} alt={PlayerState.Data.Title} />
                                : <div id="Main-Player-Song-Cover-Replace" />
                        }
                    </Link>
                    : <button onClick={Is("/now-playing") ? backward : () => {console.log("Saliendo")}}>
                        {
                            PlayerState.Data.imageURL
                                ? <img id="Main-Player-Song-Cover" src={PlayerState.Data.imageURL} alt={PlayerState.Data.Title} />
                                : <div id="Main-Player-Song-Cover-Replace" />
                        }
                    </button>
            }
            <div id="Main-Player-Song-Details">
                <span id="Main-Player-Song-Details-Name">
                    {
                        IsNot("/now-playing") && PlayerState.Data.Id
                            ? <Link to="/now-playing" id={PlayerState.Data.Title ? "Main-Player-Song-Details-Name-Link" : "Main-Player-Song-Details-Name-Link-Replace"}>
                                {PlayerState.Data.Title ? PlayerState.Data.Title : ""}
                            </Link>
                            : <button onClick={() => Is("/now-playing") ? backward() : {}} id={PlayerState.Data.Title ? "Main-Player-Song-Details-Name-Link" : "Main-Player-Song-Details-Name-Link-Replace"}>
                                {PlayerState.Data.Title ? PlayerState.Data.Title : ""}
                            </button>
                    }
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