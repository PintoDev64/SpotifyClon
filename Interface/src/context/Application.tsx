import { useReducer } from "react"
import { ContextProps, INITIALPROPS_APP, INITIALPROPS_APP_MODIFICATOR } from "../vite-env"
import { AppContext } from "."

export default function AppContextComponent({ children }: ContextProps) {

    const INITIAL_PROPS: INITIALPROPS_APP = {
        Query: ""
    }

    function reducer(state: INITIALPROPS_APP, { action, value }: INITIALPROPS_APP_MODIFICATOR) {
        return {
            ...state,
            [action]: value
        }
    }

    const [State, Dispatch] = useReducer(reducer, INITIAL_PROPS)

    function ModifyState({ action, value }: INITIALPROPS_APP_MODIFICATOR): void {
        Dispatch({
            action,
            value
        })
    }

    return (
        <AppContext.Provider value={{
            AppState: State,
            ModifyApp: ModifyState
        }}>
            {children}
        </AppContext.Provider>
    )
}