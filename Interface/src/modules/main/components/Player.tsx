import { useContext, useEffect, useRef } from "react";

// Contexts
import { PlayerContext } from "../../../context";

// Components
import SongCover from "./components/Player/Song";
import Options from "./components/Player/Options";
import Controls from "./components/Player/Controls";

export default function Player() {
    const { PlayerState } = useContext(PlayerContext);
    const audioRef = useRef(new Audio());

    useEffect(() => {
        if (PlayerState.State) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [PlayerState.State]);

    useEffect(() => {
        audioRef.current.volume = PlayerState.Volume
    }, [PlayerState.Volume])

    return (
        <div id="Main-Player" style={{ background: PlayerState.DominantColor }}>
            <Controls audioRef={audioRef}/>
            {audioRef.current && <SongCover />}
            <Options />
        </div>
    )
}
