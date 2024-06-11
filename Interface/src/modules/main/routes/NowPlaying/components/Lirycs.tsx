import { useContext, useEffect, useRef, useState } from "react"
import { PlayerContext } from "../../../../../context"

export default function Lirycs() {

    const { PlayerState } = useContext(PlayerContext);
    const Letras = useRef<HTMLDivElement>(null!)
    const [elementCount, setElementCount] = useState(0);
    const [top, setTop] = useState(30);

    console.log(elementCount);

    useEffect(() => {
        if (Letras.current) {
            const count = Letras.current.getElementsByClassName('NowPlaying-Content-DownDetails-Lirycs-Text-Pass').length;
            setElementCount(count);
        }
        if (PlayerState.CurrentTime === 0) {
            setTop(30)
        }
    }, [PlayerState.CurrentTime]); // Observa los cambios en PlayerState.CurrentTime

    useEffect(() => {
        if (elementCount > 5) {
            setTop(top - ((elementCount % 2) === 0 ? 68 : 38))
        }
    }, [elementCount]); // Observa los cambios en elementCount

    return (
        <div id="NowPlaying-Content-DownDetails-Lirycs" ref={Letras}>
            <div id="NowPlaying-Content-DownDetails-Lirycs-Container" style={{
                top
            }}>
                {
                    PlayerState.Data.Lirycs?.length !== 0 && PlayerState.Data.Lirycs?.map(({ time, text }) =>
                        <p className={`NowPlaying-Content-DownDetails-Lirycs-Text ${PlayerState.CurrentTime > time ? "NowPlaying-Content-DownDetails-Lirycs-Text-Pass" : "NowPlaying-Content-DownDetails-Lirycs-Text-NonPass"}`}>{text}</p>
                    )
                }
            </div>
        </div>
    )
}

