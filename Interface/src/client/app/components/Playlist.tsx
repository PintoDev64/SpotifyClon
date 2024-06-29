// Helpers
import { getDominantColor } from "@helpers"

// Types
import { useContext, useEffect, useRef, useState } from "react"

// Styles
import './index.css'
import { PlayerContext, QueueContext } from "@context"
import { PlaylistProps } from "@types"
import { Pause, Play } from "@assets/Player"
import { useNavigationPanel, usePlayer, useQueue } from "@hooks"
import { PLAYLIST_EXAMPLES } from "@AppConstants"

export default function Playlist(props: PlaylistProps) {
    // Component Properties
    const { Id, Songs, Title, imageURL, Description, URL } = props
    // State
    const [DominantColor, setDominantColor] = useState("")
    // Context
    const { PlayerState } = useContext(PlayerContext);
    const { QueueState } = useContext(QueueContext);
    // Hooks 
    const { ChangePlayerData, SwitchPlayer, ChangeDominantColor, PlayPlayer, RestartProgress } = usePlayer()
    const { ChangePlaylistData, ChangePlaylistID } = useQueue()
    const { goTo } = useNavigationPanel()
    // References
    const PlaylistCover = useRef<HTMLImageElement>(null!);
    // Hnadlers
    const handleMusicPlayer = (PlaylistID: string | number, Playlist: string) => {
        const response = PLAYLIST_EXAMPLES.find(({ Id: IdValue }) => Id === IdValue)
        if (PlaylistID !== response?.Id) {
            if (PlayerState.Data.Id === props.Songs[0].Id) {
                RestartProgress()
            }
            ChangePlayerData(props.Songs[0], Title)
            ChangeDominantColor(true, imageURL)
            ChangePlaylistData(Songs)
            ChangePlaylistID(Id)
            PlayPlayer()
        } else {
            SwitchPlayer()
        }
    }
    useEffect(() => {
        getDominantColor(imageURL, 100)
            .then(value => setDominantColor(value))
            .catch(() => { })
    }, [])
    // Component
    return (
        <div className="Playlist">
            <div className="Playlist-Image">
                <div
                    className="Playlist-Image-DominantColor_Top"
                    style={{ background: DominantColor }} />
                <div
                    className="Playlist-Image-DominantColor_Middle"
                    style={{ background: DominantColor }} />
                <img
                    className="Playlist-Image-Element"
                    src={imageURL}
                    alt={Title} ref={PlaylistCover}
                    width={170}
                    height={170}
                    onClick={() => goTo(URL)} />
                <button
                    id={`${QueueState.PlaylistID  === Id && "Playlist-Image-Play-Active"}`}
                    className="Playlist-Image-Play"
                    onClick={() => handleMusicPlayer(QueueState.PlaylistID, PlayerState.Playlist)}>
                    <>
                        {(Id === QueueState.PlaylistID && PlayerState.State) ? <Play /> : <Pause />}
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
