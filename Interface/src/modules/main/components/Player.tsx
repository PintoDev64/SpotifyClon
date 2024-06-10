import { useContext, useEffect, useRef } from "react";

// Contexts
import { PlayerContext } from "../../../context";

// Components
import SongCover from "./components/Player/Song";
import Options from "./components/Player/Options";
import Controls from "./components/Player/Controls";

// Helpers
import { getDominantColor } from "../helpers";

export default function Player() {
    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);
    const audioRef = useRef(new Audio());

    useEffect(() => {
        if (PlayerState.State) {
            getDominantColor(PlayerState.Data.Cover)
                .then((value) => ModifyPlayer({
                    action: "DominantColor",
                    value
                }));
            navigator.mediaSession.playbackState = "playing";
            audioRef.current.play();
        } else {
            ModifyPlayer({
                action: "DominantColor",
                value: "var(--BgSecondary)"
            })
            navigator.mediaSession.playbackState = "paused";
            audioRef.current.pause();
        }
    }, [PlayerState.State]);

    useEffect(() => {
        audioRef.current.volume = PlayerState.Volume
    }, [PlayerState.Volume])

    return (
        <div id="Main-Player" style={{ background: PlayerState.DominantColor }}>
            <Controls audioRef={audioRef} />
            {(audioRef.current && PlayerState.Data.Cover) && <SongCover />}
            <Options />
        </div>
    )
}
