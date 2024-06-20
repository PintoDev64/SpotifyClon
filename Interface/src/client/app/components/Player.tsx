import { useContext, useEffect } from "react";

// Contexts
import { PlayerContext } from "@context";

// Components
import SongCover from "./components/Player/Song";
import Options from "./components/Player/Options";
import Controls from "./components/Player/Controls";

// Helpers
import { getDominantColor } from "@helpers";

// Styles
import "./index.css"
import { usePlayer } from "@hooks";

export default function Player() {
    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);
    const { ChangeDominantColor } = usePlayer()

    useEffect(() => {
        if (PlayerState.State) {
            ChangeDominantColor(false, PlayerState.Data.imageURL)
            navigator.mediaSession.playbackState = "playing";
            PlayerState.audioRef.current.play();
        } else {
            ChangeDominantColor(true)
            navigator.mediaSession.playbackState = "paused";
            PlayerState.audioRef.current.pause();
        }
    }, [PlayerState.State, PlayerState.Data.URL]);

    useEffect(() => {
        PlayerState.audioRef.current.volume = parseInt(PlayerState.Volume) / 100
    }, [PlayerState.Volume])

    return (
        <div id="Main-Player" style={{ background: PlayerState.DominantColor }}>
            <Controls/>
            <SongCover />
            <Options />
        </div>
    )
}
