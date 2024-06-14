import { Outlet, Route, Routes, redirect } from "react-router-dom";
import { ReactNode, useContext } from "react";

// Assets
import HomePage from "./routes/Home";

// Components
import Search from "./routes/Search";
import Friends from "./components/Friends";
import LibraryPage from "./routes/Collections";
import Player from "./components/Player";
import NowPlaying from "./routes/NowPlaying";

// Contexts
import { PlayerContext, SidebarContext } from "../../context";

// Contants
import { MAINSTYLE } from "./constants";
import Queue from "./components/Queue";
import PlaylistPage from "./routes/Playlist";
import ArtistPage from "./routes/Artist";

export default function Main({ children }: { children?: ReactNode }) {

    const { SidebarState } = useContext(SidebarContext);
    const { PlayerState } = useContext(PlayerContext);

    const StyleMain = () => {
        if (SidebarState.Sidebar !== "") {
            if (SidebarState.Sidebar === "Friends") {
                return MAINSTYLE.Friends.true
            } else if (SidebarState.Sidebar === "Queue" && PlayerState.Data.Title.length !== 0) {
                return MAINSTYLE.Friends.true
            } else {
                return MAINSTYLE.Friends.false
            }
        } else {
            return MAINSTYLE.Friends.false
        }
    }

    const ComponentMain = () => {
        if (SidebarState.Sidebar !== "") {
            if (SidebarState.Sidebar === "Friends") {
                return <Friends />
            } else if (SidebarState.Sidebar === "Queue" && PlayerState.Data.Title.length !== 0) {
                return <Queue />
            }
        } else {
            return <></>
        }
    }

    return (
        <main id="Main">
            <div id="MainContent" style={StyleMain()}>
                <div id="MainContent-Home">
                    {children && children}
                    <Outlet />
                </div>
                {ComponentMain()}
            </div>
            <Player />
        </main>
    )
}