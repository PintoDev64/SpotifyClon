import { MutableRefObject, useRef } from "react";

export function useScroll<T>(): {
    references: MutableRefObject<T>,
    setScroll: (value: "Incremental" | "Decremental") => void
} {
    const references = useRef<any | T>(null!)
    function setScroll(value: "Incremental" | "Decremental") {
        if (value === "Incremental") {
            const ScrollCount = references.current.scrollLeft + references.current.offsetWidth
            references.current.scrollLeft = ScrollCount
        } else {
            const ScrollCount = references.current.scrollLeft - references.current.offsetWidth
            references.current.scrollLeft = ScrollCount
        }
    }
    return {
        references,
        setScroll
    }
}