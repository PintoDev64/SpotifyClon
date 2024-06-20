// Components
import Playlist from "@AppComponents/Playlist"
import ScrollSection from "./components/ScrollSection";
import Song from "@AppComponents/Song";

// Constants
import { ARTIST_EXAMPLE, PLAYLIST_EXAMPLES, SONGS_EXAMPLES } from "@AppConstants"

// Styles
import "./index.css"
import Artist from "@AppComponents/Artist";

export default function HomePage() {

    navigator.userAgent === "SpotifyClon" ? document.title = "Spotify Clon - App" : document.title = "Spotify Clon - Web Player"

    return (
        <div id="HomePage">
            <ScrollSection Title="Made For User" URL="/recommend">
                {
                    PLAYLIST_EXAMPLES.map(({ Description, Id, Songs, Title, imageURL, URL, Artist, Year }, index) =>
                        <Playlist key={index} Description={Description} Title={Title} imageURL={imageURL} URL={URL} Id={Id} Songs={Songs} Artist={Artist} Year={Year} />
                    )
                }
            </ScrollSection>
            <ScrollSection Title="Song For You" URL="/recommend/tracks">
                {
                    SONGS_EXAMPLES.map(({ Id, Lirycs, Genres, Year, Artist, Album, Title, imageURL, URL, Duration }, index) =>
                        <Song key={index} Lirycs={Lirycs} Id={Id} Artist={Artist} Title={Title} imageURL={imageURL} URL={URL} Album={Album} Genres={Genres} Year={Year} Duration={Duration} />
                    )
                }
            </ScrollSection>
            <ScrollSection Title="Artist For You" URL="/recommend/artist">
                {
                    ARTIST_EXAMPLE.map(({ ImageURL, Name, URL, Banner, Role, Visible }, index) =>
                        <Artist key={index} ImageURL={ImageURL} Name={Name} URL={URL} Banner={Banner} Role={Role} Visible={Visible} />
                    )
                }
            </ScrollSection>
        </div>
    )
}