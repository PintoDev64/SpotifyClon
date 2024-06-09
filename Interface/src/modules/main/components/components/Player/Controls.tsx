import { MutableRefObject, useContext, useEffect } from "react";

// Contexts
import { PlayerContext } from "../../../../../context";

// H
import { createMetaDataPlayer, getDominantColor } from "../../../helpers";
import { LoopOff, LoopOn, NextSong, Pause, Play, PreviousSong } from "../../../../../assets/Player";
import SongSlider from "./SongSlider";

interface Props {
    audioRef: MutableRefObject<HTMLAudioElement>
}

export default function Controls({ audioRef }: Props) {

    const { ModifyPlayer, PlayerState } = useContext(PlayerContext);

    useEffect(() => {
        localStorage.setItem("loop",`${PlayerState.Loop}`)
        audioRef.current.loop = PlayerState.Loop
        audioRef.current.addEventListener("ended", () => {
            if (!PlayerState.Loop) {
                pauseAudio();
            }
        });
    }, [PlayerState.Loop])
    
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = PlayerState.Data.Src
            audioRef.current.addEventListener("loadedmetadata", (_event) => {
                createMetaDataPlayer(PlayerState, playAudio, pauseAudio)

            });
        }
    }, [PlayerState.Data.Src]);

    const playAudio = () => {
        getDominantColor(PlayerState.Data.Cover)
            .then((value) => ModifyPlayer({
                action: "DominantColor",
                value
            }));
        ModifyPlayer({ action: "State", value: true });
        navigator.mediaSession.playbackState = "playing";
    }

    const pauseAudio = () => {
        ModifyPlayer({
            action: "DominantColor",
            value: "var(--BgSecondary)"
        })
        ModifyPlayer({ action: "State", value: false });
        navigator.mediaSession.playbackState = "paused";
    }

    const handlePlay = () => {
        if (PlayerState.State) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    const handleLoop = () => {
        ModifyPlayer({ action: "Loop", value: !PlayerState.Loop });
    }

    return (
        <div id="Main-Player-Controls">
            <div id="Main-Player-Controls-Play">
                <button id="Main-Player-Controls-Play-Button" onClick={handlePlay}>
                    {
                        PlayerState.State
                            ? <Play />
                            : <Pause />
                    }
                </button>
            </div>
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-PreviousSong-Button" className="Main-Player-Controls-Button-Elements">
                    <PreviousSong />
                </button>
            </div>
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-NextSong-Button" className="Main-Player-Controls-Button-Elements">
                    <NextSong />
                </button>
            </div>
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-Repeat-Button" className="Main-Player-Controls-Button-Elements" onClick={handleLoop}>
                    {
                        PlayerState.Loop
                            ? <LoopOn />
                            : <LoopOff />
                    }
                </button>
            </div>
            {audioRef.current && <SongSlider audio={audioRef.current} />}
        </div>
    )
}