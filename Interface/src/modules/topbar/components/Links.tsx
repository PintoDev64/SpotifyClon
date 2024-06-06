import { Link, useLocation } from "react-router-dom";

// Assets
import { HomeClose, HomeOpen } from "../../../assets/Home";
import { DiscoverClose, DiscoverOpen } from "../../../assets/Discover";
import { SearchClose, SearchOpen } from "../../../assets/Search";
import { LibraryClose, LibraryOpen } from "../../../assets/Library";

// Hooks
import { useNavigationPanel } from "../hooks";

export default function Links() {

    const { backward } = useNavigationPanel()

    const { pathname } = useLocation();

    return (
        <div id="Topbar-Links">
            <Link to="/library" id="LibraryLink" className={`Topbar-Links-Buttons ${pathname.includes("/library") && "Topbar-Links-Buttons-Selected"}`}>
                {
                    !pathname.includes("/library")
                        ? <LibraryClose />
                        : <LibraryOpen />
                }
                Library
            </Link>
            <button id="Topbar-Buttons-Buttons-Forward" className="Topbar-Buttons-Buttons" onClick={backward}>
                {"◀"}
            </button>
            <Link to="/" className={`Topbar-Links-Buttons ${pathname === '/' && "Topbar-Links-Buttons-Selected"}`}>
                {
                    pathname !== '/'
                        ? <HomeClose />
                        : <HomeOpen />
                }
                Home
            </Link>
            <Link to="/discover" className={`Topbar-Links-Buttons ${pathname === '/discover' && "Topbar-Links-Buttons-Selected"}`}>
                {
                    pathname !== '/discover'
                        ? <DiscoverClose />
                        : <DiscoverOpen />
                }
                Discover
            </Link>
            <Link to="/search" id="TopbarSearch" className={`Topbar-Links-Buttons ${pathname === '/search' && "Topbar-Links-Buttons-Selected"}`}>
                {
                    pathname !== '/search'
                        ? <>
                            <SearchClose />
                            Search
                        </>
                        : <>
                            <SearchOpen />
                            <input type="search" name="Search" id="Topbar-Links-Buttons-Search" spellCheck="false" placeholder="Search..." autoComplete="off" autoFocus />
                        </>
                }

            </Link>
        </div>
    )
}