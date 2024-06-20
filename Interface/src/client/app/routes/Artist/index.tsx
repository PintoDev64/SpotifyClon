import { useParams } from "react-router-dom"
import { ARTIST_EXAMPLE } from "@AppConstants";
import { useEffect, useState } from "react";
import { getDominantColor } from "@helpers";

import "./index.css"

export default function ArtistPage() {

    const [DominantColor, setDominantColor] = useState<string>("")
    const [Section, setSection] = useState<"Home" | "Albums" | "">("Home")

    const { artist } = useParams();

    document.title = "Spotify Clon - Artist"

    const { Name, ImageURL, Banner } = ARTIST_EXAMPLE[ARTIST_EXAMPLE.findIndex(({ URL }) => URL === artist)]

    console.log({ Name, ImageURL, Banner });

    useEffect(() => {
        getDominantColor(ImageURL)
            .then(value => setDominantColor(value))
    }, [])

    const SectionsList = [{
        Id: Section === "Home" ? "NowPlaying-Content-DownDetails-Navbar-Selected" : "",
        Text: "Lirycs",
        Function: () => Section !== "Home" && setSection("Home")
    }, {
        Id: Section === "Albums" ? "NowPlaying-Content-DownDetails-Navbar-Selected" : "",
        Text: "Credits",
        Function: () => Section !== "Albums" && setSection("Albums")
    }]

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
            <div id="NowPlaying-Content-DownDetails">
                    <ul id="NowPlaying-Content-DownDetails-Navbar">
                        {SectionsList.map(({ Id, Text, Function }, index) => <li key={index} id={Id} className="NowPlaying-Content-DownDetails-Navbar-Options" onClick={Function}>
                            {Text}
                        </li>)}
                    </ul>{/* 
                    {(Section === "Lirycs" && PlayerState.Data.Lirycs?.length !== 0) && <Lirycs />} */}
                </div>
        </div>
    )
}