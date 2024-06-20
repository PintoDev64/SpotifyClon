// Helpers
import { getDominantColor } from "@helpers"

// Types
import { useContext, useEffect, useRef, useState } from "react"

// Styles
import './index.css'
import { PlayerContext, QueueContext } from "@context"
import { PlaylistProps } from "@types"
import { Pause, Play } from "@assets/Player"
import { useNavigationPanel, usePlayer } from "@hooks"

export default function Playlist(props: PlaylistProps) {
    // Component Properties
    const { Id, Songs, Title, imageURL, Description, URL } = props
    // Context
    const { PlayerState } = useContext(PlayerContext);
    // Hooks 
    const { ChangePlayerData, SwitchPlayer, ChangeQueueData, ChangeDominantColor } = usePlayer()
    const { goTo } = useNavigationPanel()
    // References
    const PlaylistCover = useRef<HTMLImageElement>(null!);
    // Hnadlers
    const handleMusicPlayer = () => {
        if ((Songs[0].Id !== PlayerState.Data.Id) && (PlayerState.Data.Album.Id !== Id)) {
            ChangePlayerData(props.Songs[0], Title)
            ChangeDominantColor(true, imageURL)
            ChangeQueueData(Songs)
        } else {
            SwitchPlayer()
        }
    }
    // Component
    return (
        <div className="Playlist">
            <div className="Playlist-Image">
                <div
                    className="Playlist-Image-DominantColor_Top"
                    style={{ background: PlayerState.DominantColor }} />
                <div
                    className="Playlist-Image-DominantColor_Middle"
                    style={{ background: PlayerState.DominantColor }} />
                <img
                    className="Playlist-Image-Element"
                    src={imageURL}
                    alt={Title} ref={PlaylistCover}
                    width={170}
                    height={170}
                    onClick={() => goTo(URL)} />
                <button
                    id={`${PlayerState.Data.Album.Id === Id && "Playlist-Image-Play-Active"}`}
                    className="Playlist-Image-Play"
                    onClick={handleMusicPlayer}>
                    <>
                        {(Id === PlayerState.Data.Album.Id && PlayerState.State) ? <Play /> : <Pause />}
                    </>
                </button>
            </div>
            <div className="Playlist-Details" onClick={() => goTo(URL)}>
                <span className="Playlist-Details-Title">
                    {Title}
                </span>
                <>
                    {Description && <span className="Playlist-Details-Description">{Description}</span>}
                </>
            </div>
        </div>
    )
}
