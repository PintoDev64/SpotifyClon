import { useContext } from "react";
import { PlayerContext, QueueContext } from "../../../context";

export default function Queue() {

    const { PlayerState } = useContext(PlayerContext);
    const { QueueState } = useContext(QueueContext);

    return (
        <aside id="Sidebar">
            {
                PlayerState.Data.Name && <div className="Sidebar-Queue-Elements">
                    <img className="Sidebar-Queue-Elements-Image" src={PlayerState.Data.Cover} alt={PlayerState.Data.Name} width={50} height={50} />
                    <div className="Sidebar-Queue-Elements-Details">
                        <p>{PlayerState.Data.Name}</p>
                        <small>{PlayerState.Data.Artist[0].Name}</small>
                    </div>
                </div>
            }
            <p id="Sidebar-Queue-Title">
                Next Up:
            </p>
            <ul id="Sidebar-Queue">
                {
                    QueueState.List.length > 0 && QueueState.List.map(({ Artist, Title, imageURL }, index) =>
                        <li key={index} className="Sidebar-Queue-Elements">
                            <img className="Sidebar-Queue-Elements-Image" src={imageURL} alt={Title} width={50} height={50} />
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