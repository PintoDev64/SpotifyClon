import { Link, useLocation } from "react-router-dom";
import { HomeClose, HomeOpen } from "../../../assets/Home";
import { DiscoverClose, DiscoverOpen } from "../../../assets/Discover";
import { SearchClose, SearchOpen } from "../../../assets/Search";
import { LibraryClose, LibraryOpen } from "../../../assets/Library";

export default function Links() {
    return (
        <div id="Topbar-Links">
            <Link to="/library" className={`Topbar-Links-Buttons ${useLocation().pathname === '/library' && "Topbar-Links-Buttons-Selected"}`}>
                {
                    useLocation().pathname !== '/library'
                        ? <LibraryClose />
                        : <LibraryOpen />
                }
                Library
            </Link>
            <Link to="/" className={`Topbar-Links-Buttons ${useLocation().pathname === '/' && "Topbar-Links-Buttons-Selected"}`}>
                {
                    useLocation().pathname !== '/'
                        ? <HomeClose />
                        : <HomeOpen />
                }
                Home
            </Link>
            <Link to="/discover" className={`Topbar-Links-Buttons ${useLocation().pathname === '/discover' && "Topbar-Links-Buttons-Selected"}`}>
                {
                    useLocation().pathname !== '/discover'
                        ? <DiscoverClose />
                        : <DiscoverOpen />
                }
                Discover
            </Link>
            <Link to="/search" className={`Topbar-Links-Buttons ${useLocation().pathname === '/search' && "Topbar-Links-Buttons-Selected"}`}>
                {
                    useLocation().pathname !== '/search'
                        ? <SearchClose />
                        : <SearchOpen />
                }
                Search
            </Link>
        </div>
    )
}