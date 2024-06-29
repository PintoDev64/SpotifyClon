import { useContext } from "react";
import { PlayerContext, QueueContext } from "@context";
import { QueueNowPlaying } from "@assets/Queue";
import { PLAYLIST_EXAMPLES } from "@AppConstants";

export default function Queue() {

    const { PlayerState } = useContext(PlayerContext);
    const { QueueState } = useContext(QueueContext);

    return (
        <aside id="Sidebar">
            <p id="Sidebar-Queue-Title">
                Now Playing
            </p>
            {
                PlayerState.Data.Title && <div className="Sidebar-Queue-Elements">
                    <div className="Sidebar-Queue-Elements-Image">
                        <img src={PlayerState.Data.imageURL} alt={PlayerState.Data.Title} width={50} height={50} />
                        <div id="Sidebar-Queue-Elements-Image-NowPlaying">
                            <img src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif" alt="" width={25} height={25}/>
                        </div>
                    </div>
                    <div id="Sidebar-Queue-Title-NowPlaying" className="Sidebar-Queue-Elements-Details">
                        <p>{PlayerState.Data.Title}</p>
                        <small>{PlayerState.Data.Artist[0].Name}</small>
                    </div>
                </div>
            }
            {QueueState.QueueList.length > 0 && <p className="Sidebar-Queue-SecondTitle">
                Next In Queue
            </p>}
            <ul className="Sidebar-Queue">
                {
                    QueueState.QueueList.length > 0 && QueueState.QueueList.map(({ Artist, Title, imageURL }, index) =>
                        <li key={index} className="Sidebar-Queue-Elements">
                            <div className="Sidebar-Queue-Elements-Image">
                                <img src={imageURL} alt={Title} width={50} height={50} />
                            </div>
                            <div className="Sidebar-Queue-Elements-Details">
                                <p>{Title}</p>
                                <small>{Artist[0].Name}</small>
                            </div>
                        </li>
                    )
                }
            </ul>
            {QueueState.PlaylistQueue.length > 0 && <p className="Sidebar-Queue-SecondTitle">
                Next From: {PLAYLIST_EXAMPLES.find(({ Id }) => QueueState.PlaylistID === Id)?.Title}
            </p>}
            <ul className="Sidebar-Queue">
                {
                    QueueState.PlaylistQueue.length > 0 && QueueState.PlaylistQueue.map(({ Artist, Title, imageURL }, index) =>
                        <li key={index} className="Sidebar-Queue-Elements">
                            <div className="Sidebar-Queue-Elements-Image">
                                <img src={imageURL} alt={Title} width={50} height={50} />
                            </div>
                            <div className="Sidebar-Queue-Elements-Details">
                                <p>{Title}</p>
                                <small>{Artist[0].Name}</small>
                            </div>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}