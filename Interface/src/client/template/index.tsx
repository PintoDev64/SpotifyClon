import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { ReactNode, useState } from "react"
// Components
import Topbar from "./components/topbar"
import Library from "./components/library"
import ErrorComponent from "./components/error"
// Routes
import HomePage from "src/client/app/routes/Home"
import ArtistPage from "src/client/app/routes/Artist"
import Search from "src/client/app/routes/Search"
import PlaylistPage from "src/client/app/routes/Playlist"
import LibraryPage from "src/client/app/routes/Collections"
import NowPlaying from "src/client/app/routes/NowPlaying"

interface Props {
    children: ReactNode
}

export default function Template({ children }: Props) {

    // State
    const [LibraryStatus, setLibraryStatus] = useState(localStorage.getItem("LibraryState") ?? "false")

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={
                <div id="Application" className={`${LibraryStatus === "true" ? "Application-Compact" : "Application-Complete"}`}>
                    <Topbar LibraryStatus={LibraryStatus} />
                    <>
                        {children}
                    </>
                    <Library LibraryStatus={LibraryStatus} setLibraryStatus={setLibraryStatus} />
                </div>
            } errorElement={
                <div id="Application" className={`${LibraryStatus === "true" ? "Application-Compact" : "Application-Complete"}`}>
                    <Topbar LibraryStatus={LibraryStatus} />
                    <ErrorComponent />
                    <Library LibraryStatus={LibraryStatus} setLibraryStatus={setLibraryStatus} />
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
        <RouterProvider router={router} />
    )
}