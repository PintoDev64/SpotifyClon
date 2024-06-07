// Components
import Playlist from "../../components/Playlist"
import ScrollSection from "../../components/ScrollSection";

// Constants
import { PLAYLIST_EXAMPLES } from "../../constants"

export default function HomePage() {

    navigator.userAgent === "SpotifyClon" ? document.title = "Spotify Clon - App" : document.title = "Spotify Clon - Web Player"

    return (
        <ScrollSection Title="Made For User" URL="/section">
            {
                PLAYLIST_EXAMPLES.map(({ Description, Title, imageURL, URL }, index) => {
                    return (
                        <Playlist key={index} Description={Description} Title={Title} imageURL={imageURL} URL={URL} />
                    )
                })
            }
        </ScrollSection>
    )
}