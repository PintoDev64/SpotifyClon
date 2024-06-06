import { Route, Routes } from "react-router-dom";

// Assets
import Home from "./routes/Home";

// Styles
import "./index.css"
import Search from "./routes/Search";
import Friends from "./components/Friends";
import { SidebarContext } from "../../context";
import { useContext } from "react";
import { MAINSTYLE } from "./constants";

export default function Main() {

    const { SidebarState } = useContext(SidebarContext);

    return (
        <main id="Main">
            <div id="MainContent" style={
                SidebarState.Sidebar === "Friends"
                    ? MAINSTYLE.Friends.true
                    : MAINSTYLE.Friends.false
            }>
                <div id="MainContent-Home">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                </div>
                {
                    SidebarState.Sidebar === "Friends" && <Friends />
                }
            </div>
            <div id="Main-Player">

            </div>
        </main>
    )
}