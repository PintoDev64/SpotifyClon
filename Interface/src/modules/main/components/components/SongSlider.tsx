import { ChangeEvent, MutableRefObject, useEffect, useState } from "react";

interface Props {
    audio: HTMLAudioElement
}

export default function SongSlider({ audio }: Props) {

    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (audio) {
            navigator.mediaSession.setPositionState({
                position: audio.currentTime,
                duration: audio.duration
            });
            setCurrentTime(audio.currentTime);
            }
        }, 1000);

        setDuration(audio.duration)

        return () => clearInterval(interval);
    }, [audio]);

    useEffect(() => {
        setDuration(audio.duration)
    }, [audio.duration])

    useEffect(() => {
        audio.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [audio])

    const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime)
    }

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value);
        audio.currentTime = newTime;
        setCurrentTime(newTime);
    }

    const formatTime = (time: number) => {
        if (time == null) return `0:00`

        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    // Calcular el porcentaje de la canción que se ha reproducido
    const playedPercentage = (currentTime / duration) * 100;

    return (
        <div id="Main-Player-Controls-Timeline">
            {currentTime > 0 ? <span>{formatTime(currentTime)}</span> : <span>0:00</span>}
            <input
                min={0}
                max={`${duration}`}
                value={currentTime}
                type="range"
                name="Timeline"
                id="Main-Player-Controls-Timeline-Slider"
                onChange={handleSliderChange}
                style={{
                    background: currentTime === 0 ? "linear-gradient(90deg, var(--FgSecondary) 0 100%)" : `linear-gradient(90deg, var(--FgPrimary) ${playedPercentage}%, var(--FgSecondary) ${playedPercentage}%)`
                }}
            />
            {!isNaN(audio.duration) ? <span>{formatTime(duration)}</span> : <span>0:00</span>}
        </div>
    )
}
