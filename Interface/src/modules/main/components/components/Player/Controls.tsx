import { MutableRefObject, useContext, useEffect } from "react";

// Contexts
import { PlayerContext, QueueContext } from "../../../../../context";

// H
import { createMetaDataPlayer } from "../../../helpers";
import { LoopOff, LoopOn, NextSong, Pause, Play, PreviousSong } from "../../../../../assets/Player";
import SongSlider from "./SongSlider";
import { SongProps } from "../../../../../vite-env";
import { PLAYLIST_EXAMPLES } from "../../../constants";

interface Props {
    audioRef: MutableRefObject<HTMLAudioElement>
}

export default function Controls({ audioRef }: Props) {

    const { QueueState, ModifyQueue } = useContext(QueueContext);
    const { ModifyPlayer, PlayerState } = useContext(PlayerContext);

    const handleNextSong = (List: SongProps[]) => {
        const PlaylistIndex = PLAYLIST_EXAMPLES.findIndex(({ Id }) => PlayerState.Data.Album.Id === Id)
        audioRef.current.currentTime = 0;
        if (List.length !== 0) {
            ModifyPlayer({
                action: "Data",
                value: {
                    ...List[0]
                }
            })
            ModifyQueue({
                action: "List",
                value: [...List].splice(1, List.length)
            })
            console.log("Siguiente Cancion");
            ModifyPlayer({ action: "State", value: true })
        } else {
            console.log("detenido");
            ModifyPlayer({
                action: "Data",
                value: {
                    ...PLAYLIST_EXAMPLES[PlaylistIndex].Songs[0]
                }
            })
            ModifyQueue({
                action: "List",
                value: [...PLAYLIST_EXAMPLES[PlaylistIndex].Songs].splice(1, PLAYLIST_EXAMPLES[PlaylistIndex].Songs.length)
            })
            ModifyPlayer({ action: "State", value: false })
        }
    }

    useEffect(() => {
        audioRef.current.loop = PlayerState.Loop
    }, [PlayerState.Loop])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = PlayerState.Data.URL
            createMetaDataPlayer(PlayerState, QueueState, playAudio, pauseAudio, handleNextSong)
        }
    }, [PlayerState.Data.URL]);

    useEffect(() => {
        audioRef.current.addEventListener("ended", () => {
            if (!PlayerState.Loop && QueueState.List.length === 0) {
                pauseAudio();
            } else {
                console.log("Siguiente");
                handleNextSong(QueueState.List)
            }
        });
    }, [QueueState.List])

    const playAudio = () => {
        ModifyPlayer({ action: "State", value: true });
    }

    const pauseAudio = () => {
        ModifyPlayer({ action: "State", value: false });
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
            {/* <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-PreviousSong-Button" className="Main-Player-Controls-Button-Elements">
                    <PreviousSong />
                </button>
            </div> */}
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-NextSong-Button" className="Main-Player-Controls-Button-Elements" onClick={() => handleNextSong(QueueState.List)}>
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