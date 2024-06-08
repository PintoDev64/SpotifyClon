import { useContext, useEffect, useRef, useState } from "react";
import { LoopOff, LoopOn, Pause, Play } from "../../../assets/Player";
import { PlayerContext } from "../../../context";
import SongSlider from "./components/SongSlider";
import { getDominantColor } from "../helpers";
import SongCover from "./components/SongCover";

export default function Player() {
    const { ModifyPlayer, PlayerState } = useContext(PlayerContext);
    const audioRef = useRef(new Audio(PlayerState.Src));

    const playAudio = () => {
        getDominantColor(PlayerState.Cover)
            .then((value) => ModifyPlayer({
                action: "DominantColor",
                value
            }));
        ModifyPlayer({ action: "State", value: true });
        audioRef.current.play();
        navigator.mediaSession.playbackState = "playing";
    }

    const pauseAudio = () => {
        ModifyPlayer({
            action: "DominantColor",
            value: "var(--BgSecondary)"
        })
        ModifyPlayer({ action: "State", value: false });
        audioRef.current.pause();
        navigator.mediaSession.playbackState = "paused";
    }

    const handlePlay = () => {
        if (PlayerState.State) {
            pauseAudio();
        } else {
            playAudio();
        }
    }

    useEffect(() => {
        if (PlayerState.State) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [PlayerState.State]);

    const handleLoop = () => {
        ModifyPlayer({ action: "Loop", value: !PlayerState.Loop });
    }

    useEffect(() => {
        audioRef.current.loop = PlayerState.Loop
    }, [PlayerState.Loop])

    useEffect(() => {
        audioRef.current.src = PlayerState.Src
        audioRef.current.addEventListener("loadedmetadata", () => {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: PlayerState.Name,
                artist: PlayerState.Artist,
                album: PlayerState.Album,
                artwork: [
                    {
                        src: PlayerState.Cover,
                        sizes: "192x192",
                        type: "image/png"
                    }
                ]
            });

            navigator.mediaSession.setActionHandler("play", playAudio);
            navigator.mediaSession.setActionHandler("pause", pauseAudio);
            navigator.mediaSession.setActionHandler("previoustrack", () => { });
            navigator.mediaSession.setActionHandler("nexttrack", () => { });
        });

        audioRef.current.addEventListener("ended", () => {
            if (!PlayerState.Loop) {
                pauseAudio();
            }
        });
    }, []);

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
                <div id="Main-Player-Controls-Repeat">
                    <button id="Main-Player-Controls-Repeat-Button" className="Main-Player-Controls-Repeat-Button-Elements" onClick={handleLoop}>
                        {
                            PlayerState.Loop
                                ? <LoopOn />
                                : <LoopOff />
                        }
                    </button>
                </div>
                <SongSlider audio={audioRef.current} />
            </div>
            <SongCover />
        </div>
    )
}
