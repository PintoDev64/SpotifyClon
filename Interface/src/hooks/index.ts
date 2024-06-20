import { PlayerContext, QueueContext } from "@context";
import { getDominantColor } from "@helpers";
import { PlaylistProps, SongProps } from "@types";
import { MutableRefObject, useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Handles the scroll to determine the amount of scroll to go (in increment or decrement)
 */
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

/**
 * Handles return of a previous route
 */
export function useNavigationPanel() {
    const navigatorHnadler = useNavigate();
    return {
        backward: () => navigatorHnadler(-1),
        goTo: (Link: string) => navigatorHnadler(Link)
    }
}

/**
 * Returns a functions object to perform checks for different needs
 */
export function usePathTool() {
    const { pathname } = useLocation();
    return {
        Include: (link: string) => pathname.includes(link),
        IsNot: (link: string) => pathname !== link,
        Is: (link: string) => pathname === link
    }
}

export function usePlayer() {
    const { PlayerState, ModifyPlayer } = useContext(PlayerContext);
    const { ModifyQueue } = useContext(QueueContext);
    function ChangePlayerData(props: SongProps, Title?: string) {
        ModifyPlayer({
            action: "Data",
            value: {
                ...props
            }
        })
        Title && ModifyPlayer({
            action: "Playlist",
            value: Title
        })
        RestartPlayer()
    }
    function ChangeQueueData(Songs: SongProps[]) {
        ModifyQueue({
            action: "List",
            value: [...Songs].slice(1, (Songs.length))
        })
    }
    function ChangeDominantColor(defaultValue: boolean = false, imageURL?: string) {
        if (defaultValue) {
            ModifyPlayer({
                action: "DominantColor",
                value: "var(--BgSecondary"
            })
        } else {
            imageURL && getDominantColor(imageURL)
                .then(value => ModifyPlayer({
                    action: "DominantColor",
                    value
                }))
                .catch(message => console.log(message))
        }
    }
    function RestartPlayer() {
        setTimeout(() => {
            if (PlayerState.State) {
                ModifyPlayer({ action: "State", value: false })
                setTimeout(() => {
                    ModifyPlayer({ action: "State", value: true })
                }, 100);
            } else {
                ModifyPlayer({ action: "State", value: true })
            }
        }, 100)
    }
    function PausePlayer() {
        ModifyPlayer({ action: "State", value: false })
    }
    function PlayPlayer() {
        ModifyPlayer({ action: "State", value: true })
    }
    function SwitchPlayer() {
        ModifyPlayer({ action: "State", value: !PlayerState.State })
    }
    function RepeatPlayer() {
        ModifyPlayer({ action: "Loop", value: !PlayerState.Loop })
    }
    return {
        ChangePlayerData,
        ChangeQueueData,
        ChangeDominantColor,
        RestartPlayer,
        PausePlayer,
        PlayPlayer,
        RepeatPlayer,
        SwitchPlayer
    }
}