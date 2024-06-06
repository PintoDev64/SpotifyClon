import { Route, Routes } from "react-router-dom";

// Assets
import Home from "./routes/Home";

// Styles
import "./index.css"

export default function Main() {
    return (
        <main id="Main">
            <div id="Mian-Content">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
            <div id="Main-Player">
                
            </div>
        </main>
    )
}