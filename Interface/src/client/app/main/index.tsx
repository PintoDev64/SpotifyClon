import { Outlet } from "react-router-dom";
import { ReactNode, useContext } from "react";
// Components
import Friends from "@AppComponents/Friends";
import Player from "@AppComponents/Player";
import Queue from "@AppComponents/Queue";
// Contexts
import { PlayerContext, SidebarContext } from "@context";
// Contants
import { MAINSTYLE } from "../constants";

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
                    {children}
                    <Outlet />
                </div>
                {ComponentMain()}
            </div>
            <Player />
        </main>
    )
}