import { Link, useLocation } from "react-router-dom"
import "./index.css"
import { LibraryListElements } from "./constants";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
    setLibraryStatus: Dispatch<SetStateAction<string>>
}

export default function Library({ setLibraryStatus }: Props) {

    const [LibraryState, setLibraryState] = useState(localStorage.getItem("LibraryState") ?? "false")

    const { pathname } = useLocation();

    const handleLibrary = () => {
        setLibraryState(LibraryState === "false" ? "true" : "false")
        setLibraryStatus(LibraryState === "false" ? "true" : "false")
        localStorage.setItem("LibraryState", LibraryState === "false" ? "true" : "false")
    }

    return (
        <aside id="Library" className={`${pathname.includes("/collections") ? "Library-Active" : ""} ${LibraryState === "true" ? "Library-Compact-On" : "Library-Compact-Off"}`}>
            <ul id="Library-List" className={`${LibraryState === "true" ? "Library-Compact-On" : ""}`}>
                {
                    LibraryListElements.map(({ Text, URL, Component }) =>
                        <li key={Text} className="Library-List-Element">
                            <Link to={URL}>
                                <Component />
                                <span className={`${LibraryState === "true" ? "Library-Compact-On" : ""}`}>{Text}</span>
                            </Link>
                        </li>
                    )
                }
            </ul>
            <div id="Library_after" onClick={handleLibrary} />
        </aside>
    )
}