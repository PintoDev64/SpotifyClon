import { MutableRefObject, useContext, useEffect } from "react";
// Assets
import { LoopOff, LoopOn, NextSong, Pause, Play, PreviousSong } from "@assets/Player";
// Contexts
import { PlayerContext, QueueContext } from "@context";
// Helpers
import { createMetaDataPlayer } from "@helpers";
import SongSlider from "./Slider";
// Contants
import { PLAYLIST_EXAMPLES } from "@AppConstants";
// Components
import Volume from "./Volume";
// Types
import { SongProps } from "@types";
import { usePlayer } from "@hooks";

export default function Controls() {

    const { QueueState } = useContext(QueueContext);
    const { PlayerState } = useContext(PlayerContext);

    const { ChangePlayerData, ChangeQueueData, SwitchPlayer, PlayPlayer, PausePlayer, RepeatPlayer } = usePlayer()

    const handleNextSong = (List: SongProps[]) => {
        const PlaylistIndex = PLAYLIST_EXAMPLES.findIndex(({ Id }) => PlayerState.Data.Album.Id === Id)
        PlayerState.audioRef.current.currentTime = 0;
        if (List.length !== 0) {
            ChangePlayerData({ ...List[0] })
            ChangeQueueData(List)
            PlayPlayer()
        } else {
            ChangePlayerData(PLAYLIST_EXAMPLES[PlaylistIndex].Songs[0])
            ChangeQueueData([...PLAYLIST_EXAMPLES[PlaylistIndex].Songs])
            PausePlayer()
        }
    }

    useEffect(() => {
        PlayerState.audioRef.current.loop = PlayerState.Loop
    }, [PlayerState.Loop])

    useEffect(() => {
        if (PlayerState.audioRef.current) {
            PlayerState.audioRef.current.src = PlayerState.Data.URL
            createMetaDataPlayer(PlayerState, QueueState, PlayPlayer, PausePlayer, handleNextSong)
        }
    }, [PlayerState.Data.URL]);

    useEffect(() => {
        PlayerState.audioRef.current.addEventListener("ended", () => {
            if (!PlayerState.Loop && QueueState.List.length === 0) {
                PausePlayer();
            } else {
                handleNextSong(QueueState.List)
            }
        });
    }, [QueueState.List])

    return (
        <div id="Main-Player-Controls">
            <div id="Main-Player-Controls-Play">
                <button id="Main-Player-Controls-Play-Button" onClick={SwitchPlayer}>
                    <>
                        {PlayerState.State ? <Play /> : <Pause />}
                    </>
                </button>
            </div>
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-PreviousSong-Button" className="Main-Player-Controls-Button-Elements">
                    <PreviousSong />
                </button>
            </div>
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-NextSong-Button" className="Main-Player-Controls-Button-Elements" onClick={() => handleNextSong(QueueState.List)}>
                    <NextSong />
                </button>
            </div>
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-Repeat-Button" className="Main-Player-Controls-Button-Elements" onClick={RepeatPlayer}>
                    <>
                        {PlayerState.Loop ? <LoopOn /> : <LoopOff />}
                    </>
                </button>
            </div>
            <SongSlider />
            <Volume />
        </div>
    )
}