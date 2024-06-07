import { useReducer } from "react";

// Context
import { PlayerContext } from ".";

// Types
import { ContextProps, INITIALPROPS_PLAYER, INITIALPROPS_PLAYER_MODIFICATOR } from "../vite-env";

export default function PlayerContextComponent({ children }: ContextProps) {

    const INITIAL_PROPS: INITIALPROPS_PLAYER = {
        State: false,
        Loop: false,
        Src: "/LeaveItAlone.mp3",
        Volume: 1,
        Album: "Colors 3",
        Artist: "a_hisa",
        Name: "Leave It Alone"
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