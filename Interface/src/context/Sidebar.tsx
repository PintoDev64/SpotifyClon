import { useReducer } from "react"
;
// Context
import { SidebarContext } from ".";

// Types
import { ContextProps, INITIALPROPS_SIDEBAR_MODIFICATOR, INITIALPROPS_SIDEBAR } from "../vite-env";

export default function SidebarContextComponent({ children }: ContextProps) {

    const INITIAL_PROPS: INITIALPROPS_SIDEBAR = {
        Sidebar: ""
    }

    function reducer(state: INITIALPROPS_SIDEBAR, { action, value }: INITIALPROPS_SIDEBAR_MODIFICATOR) {
        return {
            ...state,
            [action]: value
        }
    }

    const [State, Dispatch] = useReducer(reducer, INITIAL_PROPS)

    function ModifyState({ action, value }: INITIALPROPS_SIDEBAR_MODIFICATOR): void {
        Dispatch({
            action,
            value
        })   
    }

    return (
        <SidebarContext.Provider value={{
            SidebarState: State,
            ModifySidebar: ModifyState
        }}>
            {children}
        </SidebarContext.Provider>
    )
}