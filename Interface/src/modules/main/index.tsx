import { Route, Routes, redirect } from "react-router-dom";
import { useContext } from "react";

// Assets
import HomePage from "./routes/Home";

// Styles
import "./index.css"

// Components
import Search from "./routes/Search";
import Friends from "./components/Friends";
import LibraryPage from "./routes/Library";
import Player from "./components/Player";
import NowPlaying from "./routes/NowPlaying";

// Contexts
import { PlayerContext, SidebarContext } from "../../context";

// Contants
import { MAINSTYLE } from "./constants";
import Queue from "./components/Queue";

export default function Main() {

    const { SidebarState } = useContext(SidebarContext);
    const { PlayerState } = useContext(PlayerContext);

    const NowPlayingToHome = async () => {
        console.log("redirect");
        if (PlayerState.Data.Cover.length === 0) {
            return redirect("/");
        }
        return new Response("", {
            status: 302,
          });
    }

    return (
        <main id="Main">
            <div id="MainContent" style={
                SidebarState.Sidebar !== ""
                    ? MAINSTYLE.Friends.true
                    : MAINSTYLE.Friends.false
            }>
                <div id="MainContent-Home">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/library" element={<LibraryPage />} />
                        <Route path="/now-playing" loader={NowPlayingToHome} element={<NowPlaying />} />
                    </Routes>
                </div>
                {
                    SidebarState.Sidebar === "Friends" ? <Friends /> : <Queue />
                }
            </div>
            <Player />
        </main>
    )
}