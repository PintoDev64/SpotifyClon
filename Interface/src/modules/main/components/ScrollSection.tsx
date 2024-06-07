import { Link } from "react-router-dom";
import { ReactNode } from "react";

// Assets
import { BackwardOn } from "../../../assets/Backward";
import { ForwardOn } from "../../../assets/Forward";

// Hooks
import { useScroll } from "../../../hooks";

// Definitions
interface ComponenteContext {
    Title: string
    children: ReactNode
    URL?: string
}

export default function ScrollSection({ children, URL, Title }: ComponenteContext) {

    const { references, setScroll } = useScroll<HTMLDivElement>();

    return (
        <div className="MainContent-Section">
            <div className="MainContent-Section-Options">
                <h2 className="MainContent-Section-Options-Title">
                    {
                        URL !== undefined
                            ? <Link to={URL}>{Title}</Link>
                            : Title
                    }
                </h2>
                <div className="MainContent-Section-Options-Scroll">
                    <button className="MainContent-Section-Options-ScrollLeft" onClick={() => setScroll("Decremental")}>
                        <BackwardOn />
                    </button>
                    <button className="MainContent-Section-Options-ScrollRight" onClick={() => setScroll("Incremental")}>
                        <ForwardOn />
                    </button>
                </div>
            </div>
            <div ref={references} className="MainContent-Section-List">
                {children}
            </div>
        </div>
    )
}