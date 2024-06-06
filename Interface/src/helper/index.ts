import { controls } from "../vite-env"

export function WindowControls() {
    // @ts-ignore: Unreachable code error
    if (window.controls !== undefined) {
        // @ts-ignore: Unreachable code error
        const { Maximize, Minimize, Close }: controls = window.controls

        return {
            MaximizeWindow: Maximize,
            MinimizeWindow: Minimize,
            CloseWindow: Close
        }
    } else {
        return {
            MaximizeWindow: () => { }
        }
    }
}