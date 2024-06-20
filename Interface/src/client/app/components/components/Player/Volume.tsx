import { ChangeEvent, useContext } from "react"
import { PlayerContext } from "@context"
import { VolumeDown, VolumeUp } from "@assets/Volume";

export default function Volume() {

    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        ModifyPlayer({
            action: "Volume",
            value: e.target.value
        })
    }

    const VolumePercentage = 1 * parseInt(PlayerState.Volume);

    return (
        <div id="Main-Player-Options-Volume" >
            {
                parseInt(PlayerState.Volume) >= 30 
                ? <VolumeUp />
                : <VolumeDown />
            }
            <input
                min={0}
                max={100}
                value={parseInt(PlayerState.Volume)}
                type="range"
                name="Volume"
                id="Main-Player-Options-Volume-Slider"
                onChange={handleSliderChange}
                style={{
                    background: `linear-gradient(90deg, var(--FgPrimary) ${VolumePercentage}%, var(--FgSecondary) ${VolumePercentage}%)`
                }}
            />
        </div>
    )
}