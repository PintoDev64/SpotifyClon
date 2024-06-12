import { ChangeEvent, MutableRefObject, useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../../../../context";
import { formatTime } from "../../../helpers";

interface Props {
    audio: HTMLAudioElement
}

export default function SongSlider({ audio }: Props) {

    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);

    const [duration, setDuration] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (audio.src && PlayerState.Data.URL) {
                navigator.mediaSession.setPositionState({
                    position: audio.currentTime,
                    duration: audio.duration
                });
                ModifyPlayer({
                    action: "CurrentTime",
                    value: audio.currentTime
                });
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
        ModifyPlayer({
            action: "CurrentTime",
            value: audio.currentTime
        });
    }

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (PlayerState.Data.Title.length !== 0) {
            const newTime = parseFloat(e.target.value);
            audio.currentTime = newTime;
            ModifyPlayer({
                action: "CurrentTime",
                value: newTime
            });
        } else return
    }

    // Calcular el porcentaje de la canción que se ha reproducido
    const playedPercentage = (PlayerState.CurrentTime / duration) * 100;

    return (
        <div id="Main-Player-Controls-Timeline">
            {PlayerState.CurrentTime > 0 ? <span>{formatTime(PlayerState.CurrentTime)}</span> : <span>0:00</span>}
            <input
                min={0}
                max={`${duration}`}
                value={PlayerState.CurrentTime}
                type="range"
                name="Timeline"
                id="Main-Player-Controls-Timeline-Slider"
                onChange={handleSliderChange}
                style={{
                    background: PlayerState.CurrentTime === 0 ? "linear-gradient(90deg, var(--FgSecondary) 0 100%)" : `linear-gradient(90deg, var(--FgPrimary) ${playedPercentage}%, var(--FgSecondary) ${playedPercentage}%)`
                }}
            />
            {(!isNaN(audio.duration) && audio.duration) ? <span>{formatTime(duration)}</span> : <span>0:00</span>}
        </div>
    )
}
