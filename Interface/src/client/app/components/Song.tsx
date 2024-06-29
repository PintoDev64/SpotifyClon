import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Assets
import { Pause, Play } from "@assets/Player";
// Context
import { PlayerContext } from "@context";
// Types
import { SongProps } from "@types";
// Hooks
import { useNavigationPanel, usePlayer } from "@hooks";

export default function Song(props: SongProps) {
    // Componentes Properties
    const { Id, Title, Album, imageURL, Artist } = props
    // Context
    const { PlayerState } = useContext(PlayerContext);
    // Hooks
    const { ChangePlayerData, SwitchPlayer, ChangeDominantColor, PlayPlayer } = usePlayer()
    const { goTo } = useNavigationPanel()
    // Hnadlers
    function handleMusicPlayer() {
        if (Id !== PlayerState.Data.Id) {
            ChangePlayerData(props, Title)
            ChangeDominantColor(true, imageURL)
            PlayPlayer()
        } else {
            SwitchPlayer()
        }
    }
    // Componentes 
    return (
        <div className="Song">
            <div className="Song-Image">
                <img
                    className="Song-Image-Element"
                    src={imageURL}
                    alt={Title}
                    width={170}
                    height={170}
                    onClick={() => goTo(Album.URL)} />
                <button
                    id={`${PlayerState.Data.Id === Id && "Song-Image-Play-Active"}`}
                    className="Song-Image-Play"
                    onClick={handleMusicPlayer}>
                    <>
                        {(Id === PlayerState.Data.Id && PlayerState.State) && PlayerState.Data.Album.Id === Album.Id ? <Play /> : <Pause />}
                    </>
                </button>
            </div>
            <div className="Song-Details">
                <span className="Song-Details-Title">
                    {Title}
                </span>
                <>
                    {Artist ?
                        <span className="Song-Details-Description">{Artist[0].Name}</span> :
                        <span className="Song-Details-Description">{Album.Name}</span>}
                </>
            </div>
        </div>
    )
}
