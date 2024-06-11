import { useContext, useEffect, useRef, useState } from "react"
import { PlayerContext } from "../../../../../context"

export default function Lirycs() {

    const { PlayerState } = useContext(PlayerContext);
    const Letras = useRef<HTMLDivElement>(null!)
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (PlayerState.Data.Lirycs) {
            const index = PlayerState.Data.Lirycs.findIndex(({ time }) => time > PlayerState.CurrentTime);
            setCurrentIndex(index === -1 ? PlayerState.Data.Lirycs.length : index);
        }
    }, [PlayerState.CurrentTime]);

    // Calcula la posición superior basada en el índice actual
    const top = currentIndex > 3 ? ((currentIndex - 2) * -43) + 43 : 25; // Ajusta el valor según el tamaño de tus letras

    return (
        <div id="NowPlaying-Content-DownDetails-Lirycs">
            <div id="NowPlaying-Content-DownDetails-Lirycs-Container" style={{ top }}>
                {
                    PlayerState.Data.Lirycs?.length !== 0 && PlayerState.Data.Lirycs?.map(({ time, text }, index) =>
                        <p ref={Letras} className={`NowPlaying-Content-DownDetails-Lirycs-Text ${index < currentIndex ? "NowPlaying-Content-DownDetails-Lirycs-Text-Pass" : "NowPlaying-Content-DownDetails-Lirycs-Text-NonPass"}`}>{text}</p>
                    )
                }
            </div>
        </div>
    )
}