import { useContext, useEffect, useRef, useState } from "react"
import { PlayerContext } from "../../../../../context"

export default function Lirycs() {

    const { PlayerState } = useContext(PlayerContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Hover, setHover] = useState(false)

    const LirycsContainer = useRef<HTMLDivElement>(null!)
    const Lirycs = useRef<HTMLDivElement>(null!)
    const lyricsLineRefs = useRef<HTMLParagraphElement[]>([null!]);

    useEffect(() => {
        if (PlayerState.Data.Lirycs) {
            const index = PlayerState.Data.Lirycs.findIndex(({ time }) => time > PlayerState.CurrentTime);
            setCurrentIndex(index === -1 ? PlayerState.Data.Lirycs.length : index);
        }
    }, [PlayerState.CurrentTime]);

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
                LirycsContainer.current.scrollBy(0, currentIndex > 3 ? 43 : 25)
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