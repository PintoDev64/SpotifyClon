import { ChangeEvent, useContext } from "react";
import { Link } from "react-router-dom";
// Assets
import { HomeClose, HomeOpen } from "@assets/Home";
import { DiscoverClose, DiscoverOpen } from "@assets/Discover";
import { SearchClose, SearchOpen } from "@assets/Search";
import { LibraryClose, LibraryOpen } from "@assets/Library";
import { BackwardOff } from "@assets/Backward";
// Hooks
import { useNavigationPanel } from "@hooks";
import { usePathTool } from "@hooks";
// Contexts
import { AppContext } from "@context";

interface Props {
    LibraryStatus: string
}

export default function Links({ LibraryStatus }: Props) {
    // Contexts
    const { ModifyApp } = useContext(AppContext);
    // Hooks
    const { backward } = useNavigationPanel();
    const { Include, Is, IsNot } = usePathTool()
    // Handlers
    const handleSearchParams = (event: ChangeEvent<HTMLInputElement>) => {
        ModifyApp({
            action: "Query",
            value: event.target.value
        })
    }
    // Components
    return (
        <div id="Topbar-Links">
            <Link to="/collections" id="LibraryLink" className={`Topbar-Links-Buttons ${Include("/collections") && "Topbar-Links-Buttons-Selected"} ${LibraryStatus === "true" ? "Library-Compact-On" : ""}`}>
                <>
                    {Include("/collections") ? <LibraryOpen /> : <LibraryClose />}Library
                </>
            </Link>
            <button id="Topbar-Buttons-Buttons-Forward" className="Topbar-Buttons-Buttons" onClick={backward}>
                <>
                    <BackwardOff />
                </>
            </button>
            <Link to="/" className={`Topbar-Links-Buttons ${Is('/') && "Topbar-Links-Buttons-Selected"}`}>
                <>
                    {IsNot('/') ? <HomeClose /> : <HomeOpen />}Home
                </>
            </Link>
            <Link to="/discover" className={`Topbar-Links-Buttons ${Is('/discover') && "Topbar-Links-Buttons-Selected"}`}>
                <>
                    {IsNot('/discover') ? <DiscoverClose /> : <DiscoverOpen />}Discover
                </>
            </Link>
            <Link to="/search" id="TopbarSearch" className={`Topbar-Links-Buttons ${Is('/search') && "Topbar-Links-Buttons-Selected"}`}>
                {IsNot('/search')
                    ? <><SearchClose />Search</>
                    : <><SearchOpen />
                        <input
                            type="search"
                            name="Search"
                            id="Topbar-Links-Buttons-Search"
                            spellCheck="false"
                            placeholder="Search..."
                            autoComplete="off"
                            autoFocus
                            onChange={handleSearchParams} />
                    </>}
            </Link>
        </div>
    )
}