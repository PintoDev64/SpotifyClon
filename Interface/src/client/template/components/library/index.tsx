import { Link, useLocation } from "react-router-dom"
import "./index.css"
import { Dispatch, SetStateAction } from "react";
import { LibraryListLinks } from "./constants";
import { usePathTool } from "@hooks";

interface Props {
    LibraryStatus: string,
    setLibraryStatus: Dispatch<SetStateAction<string>>
}

export default function Library({ LibraryStatus, setLibraryStatus }: Props) {
    // Hooks
    const { Include } = usePathTool();
    // Hnalders
    const handleLibrary = () => {
        setLibraryStatus(LibraryStatus === "false" ? "true" : "false")
        localStorage.setItem("LibraryState", LibraryStatus === "false" ? "true" : "false")
    }
    // Components
    return (
        <aside
            id="Library"
            className={`${Include("/collections") ? "Library-Active" : ""} ${LibraryStatus === "true" ? "Library-Compact-On" : "Library-Compact-Off"}`}>
            <ul
                id="Library-List"
                className={`${LibraryStatus === "true" ? "Library-Compact-On" : ""}`}>
                <>
                    {LibraryListLinks.map(({ Text, URL, Component }, index) =>
                        <li key={index} className="Library-List-Element">
                            <Link to={URL}>
                                <Component />
                                <span className={`${LibraryStatus === "true" ? "Library-Compact-On" : ""}`}>{
                                    Text}
                                </span>
                            </Link>
                        </li>
                    )}
                </>
            </ul>
            <div
                id="Library_after"
                onClick={handleLibrary} />
        </aside>
    )
}