// Styles
import { useLocation } from "react-router-dom"
import "./index.css"

export default function Library() {

    const { pathname } = useLocation();

    return (
        <aside id="Library" className={pathname === '/library' ? "Library-Selected" : ""}>
            Libreria
        </aside>
    )
}