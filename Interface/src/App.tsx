import { useState } from "react";
import PlayerContextComponent from "./context/Player";
import SidebarContextComponent from "./context/Sidebar";
import Library from "./modules/library";
import Main from "./modules/main";
import Topbar from "./modules/topbar";
import QueueContextComponent from "./context/Queue";

import { Analytics } from "@vercel/analytics/react"
import AppContextComponent from "./context/Application";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./modules/main/routes/Home";
import ArtistPage from "./modules/main/routes/Artist";
import Search from "./modules/main/routes/Search";
import PlaylistPage from "./modules/main/routes/Playlist";
import LibraryPage from "./modules/main/routes/Collections";
import NowPlaying from "./modules/main/routes/NowPlaying";
import ErrorComponent from "./modules/components/Error";

export default function App() {

  const [LibraryStatus, setLibraryStatus] = useState(localStorage.getItem("LibraryState") ?? "false")

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={
        <div id="Application" className={`${LibraryStatus === "true" ? "Application-Compact" : "Application-Complete"}`}>
          <Topbar LibraryStatus={LibraryStatus} />
          <Main />
          <Library setLibraryStatus={setLibraryStatus} />
        </div>
      } errorElement={
        <div id="Application" className={`${LibraryStatus === "true" ? "Application-Compact" : "Application-Complete"}`}>
          <Topbar LibraryStatus={LibraryStatus} />
          <Main >
            <ErrorComponent />
          </Main>
          <Library setLibraryStatus={setLibraryStatus} />
        </div>}>
        <Route index element={<HomePage />} />
        <Route path="/artist/:artist" element={<ArtistPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/playlist/:playlist" element={<PlaylistPage />} />
        <Route path="/collections" element={<LibraryPage />} />
        <Route path="/now-playing" element={<NowPlaying />} />
      </Route>
    )
  )

  return (
    <>
      <AppContextComponent>
        <QueueContextComponent>
          <PlayerContextComponent>
            <SidebarContextComponent>
              <RouterProvider router={router} />
            </SidebarContextComponent>
          </PlayerContextComponent>
        </QueueContextComponent>
      </AppContextComponent>
      <Analytics />
    </>
  )
}