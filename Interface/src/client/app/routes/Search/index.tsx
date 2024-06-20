import { useContext } from "react"
import { AppContext } from "@context"

import "./index.css"
import ScrollSection from "../Home/components/ScrollSection";
import { ARTIST_EXAMPLE, SONGS_EXAMPLES } from "@AppConstants";
import Song from "../../components/Song";
import Artist from "../../components/Artist";

export default function Search() {

    document.title = "Spotify Clon - Search"

    const { AppState } = useContext(AppContext);

    return (
        <div id="Search">
            <ScrollSection Title="Similar Songs">
                {
                    SONGS_EXAMPLES.map(({ Title, Album, Artist, Duration, Genres, Id, Lirycs, URL, Year, imageURL }, index) => {
                        return (Title.toLowerCase().includes(AppState.Query.toLowerCase()) || Artist[0].Name.toLowerCase().includes(AppState.Query.toLowerCase()))
                            ? <Song key={index} Lirycs={Lirycs} Id={Id} Artist={Artist} Title={Title} imageURL={imageURL} URL={URL} Album={Album} Genres={Genres} Year={Year} Duration={Duration} />
                            : <></>
                    })
                }
            </ScrollSection>
            <ScrollSection Title="Similar Artist" URL="/recommend/artist">
                {
                    ARTIST_EXAMPLE.map(({ ImageURL, Name, URL, Banner, Role, Visible }, index) => {
                        return Name.toLowerCase().includes(AppState.Query.toLowerCase())
                         ? <Artist key={index} ImageURL={ImageURL} Name={Name} URL={URL} Banner={Banner} Role={Role} Visible={Visible}/>
                         : <></>
                    })
                }
            </ScrollSection>
        </div>
    )
}