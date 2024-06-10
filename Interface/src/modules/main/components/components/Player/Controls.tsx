import { MutableRefObject, useContext, useEffect } from "react";

// Contexts
import { PlayerContext, QueueContext } from "../../../../../context";

// H
import { createMetaDataPlayer } from "../../../helpers";
import { LoopOff, LoopOn, NextSong, Pause, Play, PreviousSong } from "../../../../../assets/Player";
import SongSlider from "./SongSlider";

interface Props {
    audioRef: MutableRefObject<HTMLAudioElement>
}

export default function Controls({ audioRef }: Props) {

    const { QueueState, ModifyQueue } = useContext(QueueContext);
    const { ModifyPlayer, PlayerState } = useContext(PlayerContext);

    const handleNextSong = () => {
        audioRef.current.currentTime = 0;
        if (QueueState.List.length > 0) {
            ModifyPlayer({
                action: "Data",
                value: {
                    Id: QueueState.List[0].Id,
                    Src: QueueState.List[0].URL,
                    Album: QueueState.List[0].Album.Name,
                    AlbumId: QueueState.List[0].Album.Id,
                    AlbumURL: QueueState.List[0].Album.URL,
                    Artist: QueueState.List[0].Artist,
                    ArtistURL: QueueState.List[0].Artist[0].URL,
                    Cover: QueueState.List[0].imageURL,
                    Name: QueueState.List[0].Title,
                    Year: QueueState.List[0].Year,
                    Genres: QueueState.List[0].Genres
                }
            })
            ModifyQueue({
                action: "List",
                value: QueueState.List.splice(1, QueueState.List.length)
            })
        }
        if (QueueState.List.length !== 0) {
            setTimeout(() => {
                if (PlayerState.State && QueueState.List.length > 0) {
                    ModifyPlayer({ action: "State", value: false })
                    setTimeout(() => {
                        ModifyPlayer({ action: "State", value: true })
                    }, 100);
                } else {
                    ModifyPlayer({ action: "State", value: true })
                }
            }, 100)
        } else {
            ModifyPlayer({ action: "State", value: false })
        }
    }

    useEffect(() => {
        localStorage.setItem("loop", `${PlayerState.Loop}`)
        audioRef.current.loop = PlayerState.Loop
    }, [PlayerState.Loop])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = PlayerState.Data.Src
            audioRef.current.addEventListener("loadedmetadata", (_event) => {
                createMetaDataPlayer(PlayerState, playAudio, pauseAudio)
            });
        }
    }, [PlayerState.Data.Src]);

    useEffect(() => {
        console.log(QueueState.List.length);
        audioRef.current.addEventListener("ended", () => {
            console.log(QueueState.List.length);
            if (!PlayerState.Loop && QueueState.List.length === 0) {
                pauseAudio();
            } else {
                console.log("Siguiente");
                handleNextSong()
            }
        });
    }, [])

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
                <button id="Main-Player-Controls-NextSong-Button" className="Main-Player-Controls-Button-Elements" onClick={handleNextSong}>
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