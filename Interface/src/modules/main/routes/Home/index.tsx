// Components
import Playlist from "../../components/Playlist"
import ScrollSection from "../../components/ScrollSection";
import Song from "../../components/Song";

// Constants
import { PLAYLIST_EXAMPLES, SONGS_EXAMPLES } from "../../constants"

export default function HomePage() {

    navigator.userAgent === "SpotifyClon" ? document.title = "Spotify Clon - App" : document.title = "Spotify Clon - Web Player"

    return (
        <div id="HomePage">
            <ScrollSection Title="Made For User" URL="/section">
                {
                    PLAYLIST_EXAMPLES.map(({ Description, Id, Songs, Title, imageURL, URL, Artist, Year }, index) =>
                        <Playlist key={index} Description={Description} Title={Title} imageURL={imageURL} URL={URL} Id={Id} Songs={Songs} Artist={Artist} Year={Year} />
                    )
                }
            </ScrollSection>
            <ScrollSection Title="Song For You" URL="/recommend">
                {
                    SONGS_EXAMPLES.map(({ Id, Lirycs, Genres, Year, Artist, Album, Title, imageURL, URL, Duration }, index) =>
                        <Song key={index} Lirycs={Lirycs} Id={Id} Artist={Artist} Title={Title} imageURL={imageURL} URL={URL} Album={Album} Genres={Genres} Year={Year} Duration={Duration} />
                    )
                }
            </ScrollSection>
        </div>
    )
}