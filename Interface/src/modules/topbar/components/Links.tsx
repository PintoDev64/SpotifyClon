import { Link, useLocation } from "react-router-dom";

// Assets
import { HomeClose, HomeOpen } from "../../../assets/Home";
import { DiscoverClose, DiscoverOpen } from "../../../assets/Discover";
import { SearchClose, SearchOpen } from "../../../assets/Search";
import { LibraryClose, LibraryOpen } from "../../../assets/Library";

// Hooks
import { useNavigationPanel } from "../hooks";
import { BackwardOff } from "../../../assets/Backward";
import { ChangeEvent, useContext } from "react";
import { AppContext } from "../../../context";

interface Props {
    LibraryStatus: string
}

export default function Links({ LibraryStatus }: Props) {

    const { ModifyApp } = useContext(AppContext);
    const { backward } = useNavigationPanel();

    const { pathname } = useLocation();

    const handleSearchParams = (event: ChangeEvent<HTMLInputElement>) => {
        ModifyApp({
            action: "Query",
            value: event.target.value
        })
    }

    return (
        <div id="Topbar-Links">
            <Link to="/collections" id="LibraryLink" className={`Topbar-Links-Buttons ${pathname.includes("/collections") && "Topbar-Links-Buttons-Selected"} ${LibraryStatus === "true" ? "Library-Compact-On" : ""}`}>
                {
                    !pathname.includes("/collections")
                        ? <LibraryClose />
                        : <LibraryOpen />
                }
                Library
            </Link>
            <button id="Topbar-Buttons-Buttons-Forward" className="Topbar-Buttons-Buttons" onClick={backward}>
                <BackwardOff />
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
                            <input type="search" name="Search" id="Topbar-Links-Buttons-Search" spellCheck="false" placeholder="Search..." autoComplete="off" autoFocus onChange={handleSearchParams}/>
                        </>
                }

            </Link>
        </div>
    )
}