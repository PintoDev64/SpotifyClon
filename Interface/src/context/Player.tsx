import { useEffect, useReducer, useRef } from "react";

// Context
import { PlayerContext } from ".";

// Types
import { ContextProps, INITIALPROPS_PLAYER, INITIALPROPS_PLAYER_MODIFICATOR } from "../vite-env";

export default function PlayerContextComponent({ children }: ContextProps) {
    const INITIAL_PROPS: INITIALPROPS_PLAYER = {
        State: false,
        Playlist: "",
        Loop: (localStorage.getItem("Loop") === "true"),
        Volume: localStorage.getItem("Volume") || "100",
        CurrentTime: 0,
        Data: {
            Id: 0,
            URL: "",
            imageURL: "",
            Title: "",
            Album: {
                Id: "",
                Name: "",
                URL: ""
            },
            Lirycs: [],
            Artist: [],
            Duration: 0,
            Year: 0,
            Genres: []
        },
        DominantColor: ""
    }

    function reducer(state: INITIALPROPS_PLAYER, { action, value }: INITIALPROPS_PLAYER_MODIFICATOR) {
        return {
            ...state,
            [action]: value
        }
    }

    const [State, Dispatch] = useReducer(reducer, INITIAL_PROPS)

    useEffect(() => {
        localStorage.setItem("Loop", `${State.Loop}`)
        localStorage.setItem("Volume", `${State.Volume}`)
    }, [State.Loop, State.Volume])

    function ModifyState({ action, value }: INITIALPROPS_PLAYER_MODIFICATOR): void {
        Dispatch({
            action,
            value
        })
    }

    return (
        <PlayerContext.Provider value={{
            PlayerState: State,
            ModifyPlayer: ModifyState
        }}>
            {children}
        </PlayerContext.Provider>
    )
}