import { app, BrowserWindow } from "electron";
import { is } from "@electron-toolkit/utils";
import { join } from "node:path"

// constants
let SpotifyWindow: BrowserWindow;

function CreateWindow() {
    SpotifyWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {

            preload: join(__dirname, "preload.js")
        }
    })

    SpotifyWindow.webContents.setUserAgent("SpotifyClon")

    if (is.dev) SpotifyWindow.loadURL("http://localhost:5173/");
    else SpotifyWindow.loadFile(join(__dirname, "../index.html"));
}

app.whenReady().then(() => {
    CreateWindow()

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) CreateWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})