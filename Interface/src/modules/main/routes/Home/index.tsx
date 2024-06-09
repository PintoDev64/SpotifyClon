// Components
import Playlist from "../../components/Playlist"
import ScrollSection from "../../components/ScrollSection";
import Song from "../../components/Song";

// Constants
import { PLAYLIST_EXAMPLES, SONGS_EXAMPLES } from "../../constants"

export default function HomePage() {

    navigator.userAgent === "SpotifyClon" ? document.title = "Spotify Clon - App" : document.title = "Spotify Clon - Web Player"

    return (
        <>
            <ScrollSection Title="Made For User" URL="/section">
                {
                    PLAYLIST_EXAMPLES.map(({ Description, Title, imageURL, URL }, index) =>
                        <Playlist key={index} Description={Description} Title={Title} imageURL={imageURL} URL={URL} />
                    )
                }
                {
                    SONGS_EXAMPLES.map(({ Id, Genres, Year, Artist, Album, Title, imageURL, URL }, index) =>
                        <Song key={index} Id={Id} Artist={Artist} Title={Title} imageURL={imageURL} URL={URL} Album={Album} Genres={Genres} Year={Year} />
                    )
                }
            </ScrollSection>
            <ScrollSection Title="Made For User" URL="/section">
                {
                    PLAYLIST_EXAMPLES.map(({ Description, Title, imageURL, URL }, index) =>
                        <Playlist key={index} Description={Description} Title={Title} imageURL={imageURL} URL={URL} />
                    )
                }
                {
                    SONGS_EXAMPLES.map(({ Id, Genres, Year, Artist, Album, Title, imageURL, URL }, index) =>
                        <Song key={index} Id={Id} Artist={Artist} Title={Title} imageURL={imageURL} URL={URL} Album={Album} Genres={Genres} Year={Year} />
                    )
                }
            </ScrollSection>
            <ScrollSection Title="Made For User" URL="/section">
                {
                    PLAYLIST_EXAMPLES.map(({ Description, Title, imageURL, URL }, index) =>
                        <Playlist key={index} Description={Description} Title={Title} imageURL={imageURL} URL={URL} />
                    )
                }
                {
                    SONGS_EXAMPLES.map(({ Id, Genres, Year, Artist, Album, Title, imageURL, URL }, index) =>
                        <Song key={index} Id={Id} Artist={Artist} Title={Title} imageURL={imageURL} URL={URL} Album={Album} Genres={Genres} Year={Year} />
                    )
                }
            </ScrollSection>
            <ScrollSection Title="Made For User" URL="/section">
                {
                    PLAYLIST_EXAMPLES.map(({ Description, Title, imageURL, URL }, index) =>
                        <Playlist key={index} Description={Description} Title={Title} imageURL={imageURL} URL={URL} />
                    )
                }
                {
                    SONGS_EXAMPLES.map(({ Id, Genres, Year, Artist, Album, Title, imageURL, URL }, index) =>
                        <Song key={index} Id={Id} Artist={Artist} Title={Title} imageURL={imageURL} URL={URL} Album={Album} Genres={Genres} Year={Year} />
                    )
                }
            </ScrollSection>
        </>
    )
}