import { useReducer } from "react"
import { QueueContext } from "."
import { ContextProps, INITIALPROPS_QUEUE, INITIALPROPS_QUEUE_MODIFICATOR } from "../vite-env"

export default function QueueContextComponent({ children }: ContextProps) {

    const INITIAL_PROPS: INITIALPROPS_QUEUE = {
        List: []
    }

    function reducer(state: INITIALPROPS_QUEUE, { action, value }: INITIALPROPS_QUEUE_MODIFICATOR) {
        return {
            ...state,
            [action]: value
        }
    }

    const [State, Dispatch] = useReducer(reducer, INITIAL_PROPS)

    function ModifyState({ action, value }: INITIALPROPS_QUEUE_MODIFICATOR): void {
        Dispatch({
            action,
            value
        })
    }

    return (
        <QueueContext.Provider value={{
            QueueState: State,
            ModifyQueue: ModifyState
        }}>
            {children}
        </QueueContext.Provider>
    )
}