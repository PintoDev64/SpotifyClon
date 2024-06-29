import { useContext, useEffect } from "react";
import { LoopOff, LoopOn, NextSong, Pause, Play, PreviousSong } from "@assets/Player";
import { PlayerContext, QueueContext } from "@context";
import { createMetaDataPlayer } from "@helpers";
import SongSlider from "./Slider";
import { PLAYLIST_EXAMPLES } from "@AppConstants";
import { SongProps } from "@types";
import { usePlayer, useQueue } from "@hooks";

export default function Controls() {
    const { QueueState } = useContext(QueueContext);
    const { PlayerState } = useContext(PlayerContext);
    const { ChangeQueueData, ChangePlaylistData } = useQueue();
    const { ChangePlayerData, SwitchPlayer, PlayPlayer, PausePlayer, RepeatPlayer, RestartProgress, RestartPlayer } = usePlayer();

    const handleNextSong = (QueueList: SongProps[], PlaylistQueue: SongProps[], PlaylistID: string | number) => {
        const PlaylistIndex = PLAYLIST_EXAMPLES.findIndex(({ Id }) => PlaylistID === Id);

        RestartProgress()

        if (QueueList.length !== 0) {
            ChangePlayerData({ ...QueueList[0] });
            ChangeQueueData([...QueueList]);
            RestartPlayer();
            console.log("Queue");

        } else if (PlaylistQueue.length !== 0) {
            ChangePlayerData({ ...PlaylistQueue[0] });
            ChangePlaylistData([...PlaylistQueue]);
            RestartPlayer();
            console.log("Playlist");

        } else {
            ChangePlayerData(PLAYLIST_EXAMPLES[PlaylistIndex].Songs[0]);
            ChangePlaylistData([...PLAYLIST_EXAMPLES[PlaylistIndex].Songs]);
            PausePlayer();
            console.log("Restart");

        }
    };

    const handleEndedEvent = () => {
        handleNextSong(QueueState.QueueList, QueueState.PlaylistQueue, QueueState.PlaylistID);
    };

    useEffect(() => {
        createMetaDataPlayer(PlayerState, QueueState, PlayPlayer, PausePlayer, handleNextSong, RestartProgress);

        PlayerState.audioRef.current.addEventListener("ended", handleEndedEvent);

        return () => {
            PlayerState.audioRef.current.removeEventListener("ended", handleEndedEvent);
        };
    }, [QueueState.QueueList, QueueState.PlaylistQueue, QueueState.PlaylistID]);

    useEffect(() => {
        PlayerState.audioRef.current.loop = PlayerState.Loop;
        PlayerState.audioRef.current.src = PlayerState.Data.URL;
    }, [PlayerState.Loop, PlayerState.Data.URL])


    return (
        <div id="Main-Player-Controls">
            <div id="Main-Player-Controls-Play">
                <button id="Main-Player-Controls-Play-Button" onClick={SwitchPlayer}>
                    {PlayerState.State ? <Play /> : <Pause />}
                </button>
            </div>
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-PreviousSong-Button" className="Main-Player-Controls-Button-Elements" onClick={RestartProgress}>
                    <PreviousSong />
                </button>
            </div>
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-NextSong-Button" className="Main-Player-Controls-Button-Elements" onClick={() => handleNextSong(QueueState.QueueList, QueueState.PlaylistQueue, QueueState.PlaylistID)}>
                    <NextSong />
                </button>
            </div>
            <div className="Main-Player-Controls-Button">
                <button id="Main-Player-Controls-Repeat-Button" className="Main-Player-Controls-Button-Elements" onClick={RepeatPlayer}>
                    {PlayerState.Loop ? <LoopOn /> : <LoopOff />}
                </button>
            </div>
            <SongSlider />
        </div>
    );
}