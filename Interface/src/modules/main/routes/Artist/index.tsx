import { useParams } from "react-router-dom"
import { ARTIST_EXAMPLE } from "../../constants";
import { useEffect, useState } from "react";
import { getDominantColor } from "../../helpers";

import "./index.css"

export default function ArtistPage() {

    const [DominantColor, setDominantColor] = useState<string>("")

    const { artist } = useParams();

    document.title = "Spotify Clon - Artist"

    const { Name, ImageURL, Banner } = ARTIST_EXAMPLE[ARTIST_EXAMPLE.findIndex(({ URL }) => URL === artist)]

    console.log({ Name, ImageURL, Banner });

    useEffect(() => {
        getDominantColor(ImageURL)
            .then(value => setDominantColor(value))
    }, [])


    return (
        <div id="ArtistPage">
            <div id="ArtistPage-Top" style={
                Banner.length > 0
                    ? { backgroundImage: `url("${Banner}")`, height: 500 }
                    : { background: DominantColor, height: 225 }
            }>
                <div id="ArtistPage-Top-Info">
                    {Banner.length === 0 && <img id="ArtistPage-Top-Info-Image" src={ImageURL} alt="" />}
                    <div id="ArtistPage-Top-Info-Text">
                        <h1 id="ArtistPage-Top-Info-Text-Name">{Name}</h1>
                        <p id="ArtistPage-Top-Info-Text-MonthlyListeners">20,798,080 monthly listeners</p>
                    </div>
                </div>
                <div id="ArtistPage-Top-Actions">
                    
                </div>
            </div>
        </div>
    )
}