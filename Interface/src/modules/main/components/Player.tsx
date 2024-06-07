import { useContext, useEffect, useRef } from "react";
import { LoopOff, LoopOn, Pause, Play } from "../../../assets/Player";
import { PlayerContext } from "../../../context";

export default function Player() {
    const { ModifyPlayer, PlayerState } = useContext(PlayerContext);
    const AudioRef = useRef<HTMLAudioElement>(null!);

    const playAudio = () => {
        console.log("Reproduce");
        AudioRef.current.play();
        ModifyPlayer({ action: "State", value: true });
        navigator.mediaSession.playbackState = "playing";
    }

    const pauseAudio = () => {
        console.log("Pausa");
        AudioRef.current.pause();
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
        ModifyPlayer({ action: "Loop", value: !PlayerState.Loop })
    }

    let intervalId

    useEffect(() => {
        AudioRef.current.addEventListener("loadedmetadata", () => {
            navigator.mediaSession.metadata = new MediaMetadata({
                title: PlayerState.Name,
                artist: PlayerState.Artist,
                album: PlayerState.Album,
                artwork: [
                    {
                        src: "https://steamuserimages-a.akamaihd.net/ugc/1850418301803078440/DEA1D8E30EE56AF19872FD292A96E92CE183B68D/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
                        sizes: "192x192",
                        type: "image/png"
                    }
                ]
            });

            // Para capturar eventos de medios:
            navigator.mediaSession.setActionHandler("play", playAudio);
            navigator.mediaSession.setActionHandler("pause", pauseAudio);
            navigator.mediaSession.setActionHandler("previoustrack", () => { });
            navigator.mediaSession.setActionHandler("nexttrack", () => { });
        })

    }, [PlayerState.Loop, PlayerState.State])

    if (AudioRef.current) {
        AudioRef.current.addEventListener("ended", () => {
            if (!PlayerState.Loop) {
                pauseAudio()
            }
        })
    }

    intervalId = setInterval(() => {
        if (AudioRef.current) {
            navigator.mediaSession.setPositionState({
                position: AudioRef.current.currentTime,
                duration: AudioRef.current.duration
            });
        }
    }, 1000);

    return (
        <div id="Main-Player">
            <button onClick={handlePlay}>
                <audio ref={AudioRef} src={PlayerState.Src} loop={PlayerState.Loop}></audio>
                {
                    PlayerState.State
                        ? <Play />
                        : <Pause />
                }
            </button>
            <button onClick={handleLoop}>
                {
                    PlayerState.Loop
                        ? <LoopOn />
                        : <LoopOff />
                }
            </button>
            {
                PlayerState.Name
            }
        </div>
    )
}
