import { useContext } from "react";
import { PlayerContext, QueueContext } from "../../../context";
import { QueueNowPlaying } from "../../../assets/Queue";

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
                            <QueueNowPlaying />
                        </div>
                    </div>
                    <div className="Sidebar-Queue-Elements-Details">
                        <p>{PlayerState.Data.Title}</p>
                        <small>{PlayerState.Data.Artist[0].Name}</small>
                    </div>
                </div>
            }
            {QueueState.List.length > 0 && <p id="Sidebar-Queue-SecondTitle">
                Next From: {PlayerState.Playlist}
            </p>}
            <ul id="Sidebar-Queue">
                {
                    QueueState.List.length > 0 && QueueState.List.map(({ Artist, Title, imageURL }, index) =>
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