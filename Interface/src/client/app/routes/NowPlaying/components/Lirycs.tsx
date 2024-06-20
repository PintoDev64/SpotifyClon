import { useContext, useEffect, useRef, useState } from "react"
import { PlayerContext } from "@context"

export default function Lirycs() {

    const { PlayerState } = useContext(PlayerContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Hover, setHover] = useState(false)

    const LirycsContainer = useRef<HTMLDivElement>(null!)
    const lyricsLineRefs = useRef<HTMLParagraphElement[]>([null!]);

    if (PlayerState.Data.Lirycs) {
        setInterval(() => {
            const index = PlayerState.Data.Lirycs.findIndex(({ time }) => time > PlayerState.audioRef.current.currentTime);
            setCurrentIndex(index === -1 ? PlayerState.Data.Lirycs.length : index);
        }, 250)
    }

    useEffect(() => {
        if (lyricsLineRefs.current[currentIndex] && Hover) {
            if (currentIndex > 6) {
                lyricsLineRefs.current[currentIndex].scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            } else {
                LirycsContainer.current.scrollTo(0, 0)
            }
        } else {
            if (currentIndex > 6) {
                LirycsContainer.current.scrollTo(0, ([...lyricsLineRefs.current].splice(0, currentIndex).length * 42) - (42 * 4.5))
            } else {
                LirycsContainer.current.scrollTo(0, 0)
            }
        }
    }, [currentIndex])

    const handleMouseOn = () => {
        setHover(true)
    }

    const handleMouseOff = () => {
        setHover(false)
    }

    return (
        <div id="NowPlaying-Content-DownDetails-Lirycs" ref={LirycsContainer} onMouseEnter={handleMouseOn} onMouseLeave={handleMouseOff}>
            {
                PlayerState.Data.Lirycs?.length !== 0 && PlayerState.Data.Lirycs?.map(({ text }, index) =>
                    <p key={index} ref={ref => lyricsLineRefs.current[index] = ref!} className={`NowPlaying-Content-DownDetails-Lirycs-Text ${index < currentIndex ? "NowPlaying-Content-DownDetails-Lirycs-Text-Pass" : "NowPlaying-Content-DownDetails-Lirycs-Text-NonPass"}`}>{text}</p>
                )
            }
        </div>
    )
}