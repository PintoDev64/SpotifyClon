import { ChangeEvent, useContext, useEffect, useState } from "react";
// Context
import { PlayerContext } from "@context";
// Helpers
import { formatTime } from "@helpers";

export default function SongSlider() {

    const { PlayerState } = useContext(PlayerContext);

    const [duration, setDuration] = useState(0)
    const [CurrentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        if (PlayerState.audioRef.current.src && PlayerState.Data.URL) {
            setInterval(() => {
                navigator.mediaSession.setPositionState({
                    position: PlayerState.audioRef.current.currentTime,
                    duration: PlayerState.audioRef.current.duration
                });
            }, 1000)
        }
        setDuration(PlayerState.audioRef.current.duration)
        PlayerState.audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
        return () => {
            PlayerState.audioRef.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [PlayerState.audioRef.current.duration]);

    const handleTimeUpdate = () => {
        setCurrentTime(PlayerState.audioRef.current.currentTime)
    }

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (PlayerState.Data.Title.length !== 0) {
            const newTime = parseFloat(e.target.value);
            PlayerState.audioRef.current.currentTime = newTime;
            setCurrentTime(newTime)
        } else return
    }

    // Calcular el porcentaje de la canción que se ha reproducido
    const playedPercentage = (CurrentTime / duration) * 100;

    return (
        <div id="Main-Player-Controls-Timeline">
            {CurrentTime > 0 ? <span>{formatTime(CurrentTime)}</span> : <span>0:00</span>}
            <input
                min={0}
                max={`${duration}`}
                value={CurrentTime}
                type="range"
                name="Timeline"
                id="Main-Player-Controls-Timeline-Slider"
                onChange={handleSliderChange}
                style={{
                    background: CurrentTime === 0 ? "linear-gradient(90deg, var(--FgSecondary) 0 100%)" : `linear-gradient(90deg, var(--FgPrimary) ${playedPercentage}%, var(--FgSecondary) ${playedPercentage}%)`
                }}
            />
            {(!isNaN(PlayerState.audioRef.current.duration) && duration) ? <span>{formatTime(duration)}</span> : <span>0:00</span>}
        </div>
    )
}
