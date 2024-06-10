import { useReducer } from "react";

// Context
import { PlayerContext } from ".";

// Types
import { ContextProps, INITIALPROPS_PLAYER, INITIALPROPS_PLAYER_MODIFICATOR } from "../vite-env";

export default function PlayerContextComponent({ children }: ContextProps) {

    const INITIAL_PROPS: INITIALPROPS_PLAYER = {
        State: false,
        Loop: (localStorage.getItem("loop") === "true"),
        Volume: 1,
        Data: {
            Id: 0,
            Src: "",
            Album: "",
            Artist: [],
            Name: "",
            Cover: "",
            AlbumURL: "",
            ArtistURL: "",
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