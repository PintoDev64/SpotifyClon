// Helpers
import { getDominantColor } from "../helpers"

// Types
import { useEffect, useRef, useState } from "react"

// Styles
import './index.css'
import { Link } from "react-router-dom"

// Defnitions
interface PlaylistProps {
    Title: string,
    Description?: string,
    Artist?: string
    imageURL: string
    URL: string
}

export default function Playlist({ Title, Description, imageURL, Artist, URL }: PlaylistProps) {

    const [DominantColor, setDominantColor] = useState<string>()

    const PlaylistCover = useRef<HTMLImageElement>(null!);

    useEffect(() => {
        getDominantColor(imageURL)
            .then((value) => setDominantColor(value));
    }, [])

    return (
        <Link to={URL}>
            <div className="Playlist">
                <div className="Playlist-Image">
                    <div className="Playlist-Image-DominantColor_Top" style={{ background: DominantColor }} />
                    <div className="Playlist-Image-DominantColor_Middle" style={{ background: DominantColor }} />
                    <img className="Playlist-Image-Element" src={imageURL} alt={Title} ref={PlaylistCover} width={170} height={170} />
                </div>
                <div className="Playlist-Details">
                    <span className="Playlist-Details-Title">
                        {Title}
                    </span>
                    {
                        Artist
                            ? <span className="Playlist-Details-Description">{Artist}</span>
                            : <span className="Playlist-Details-Description">{Description}</span>
                    }
                </div>
            </div>
        </Link>
    )
}
