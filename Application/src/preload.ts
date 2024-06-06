import { contextBridge, ipcRenderer } from "electron";

// Funtions

function Maximize() {
    ipcRenderer.send("Maximize")
}
function Minimize() {
    ipcRenderer.send("Minimize")
}
function Close() {
    ipcRenderer.send("Close")
}

export const WindowAPI = {
    Maximize,
    Minimize,
    Close
}

contextBridge.exposeInMainWorld("controls", WindowAPI)