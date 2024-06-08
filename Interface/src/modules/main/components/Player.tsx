import { useContext, useEffect, useRef, useState } from "react";
import { LoopOff, LoopOn, NextSong, Pause, Play, PreviousSong } from "../../../assets/Player";
import { PlayerContext } from "../../../context";
import SongSlider from "./components/SongSlider";
import { createMetaDataPlayer, getDominantColor } from "../helpers";
import SongCover from "./components/SongCover";

export default function Player() {
    const { ModifyPlayer, PlayerState } = useContext(PlayerContext);
    const audioRef = useRef(new Audio());

    console.log(PlayerState.State);

    useEffect(() => {
        if (PlayerState.State) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [PlayerState.State]);

    useEffect(() => {
        audioRef.current.loop = PlayerState.Loop
        audioRef.current.addEventListener("ended", () => {
            if (!PlayerState.Loop) {
                pauseAudio();
            }
        });
    }, [PlayerState.Loop])

    useEffect(() => {
        console.log(PlayerState.Data.Src);
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
        <div id="Main-Player" style={{ background: PlayerState.DominantColor }}>
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
            {audioRef.current && <SongCover />}
        </div>
    )
}
