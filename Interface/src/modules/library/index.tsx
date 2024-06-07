import { Link, useLocation } from "react-router-dom"
import Hide from "../../assets/Hide"
import "./index.css"
import { LibraryListElements } from "./constants";

export default function Library() {

    const { pathname } = useLocation();

    return (
        <aside id="Library" className={pathname.includes("/library") ? "Library-Active" : ""}>
            <ul id="Library-List">
                {
                    LibraryListElements.map(({ Text, URL, Component }) =>
                        <li key={Text} className="Library-List-Element">
                            <Link to={URL}>
                                <Component />
                                {Text}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}