import { app, BrowserWindow, ipcMain } from "electron";
import { is } from "@electron-toolkit/utils";
import { join } from "node:path"

// constants
let SpotifyWindow: BrowserWindow;

function CreateWindow() {
    SpotifyWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        minWidth: 1280,
        minHeight: 720,
        autoHideMenuBar: true,
        frame: false,
        titleBarStyle: "hidden",
        webPreferences: {
            contextIsolation: true,
            preload: join(__dirname, "preload.js")
        }
    })

    SpotifyWindow.webContents.setUserAgent("SpotifyClon")

    if (is.dev) SpotifyWindow.loadURL("http://localhost:5173/");
    else SpotifyWindow.loadFile(join(__dirname, "../index.html"));
}

app.whenReady().then(() => {
    CreateWindow()

    SpotifyWindow.webContents.setWindowOpenHandler(({ url }) => {
        // Aquí puedes controlar qué hacer cuando se intenta abrir una nueva ventana.
        // Por ejemplo, puedes abrir la URL en el navegador predeterminado del usuario:
        require('electron').shell.openExternal(url)
        return { action: 'deny' } // Esto previene que Electron abra una nueva ventana
    })

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

// IPC Comunication
ipcMain.on("Maximize", () => {
    if (SpotifyWindow.isMaximized()) return SpotifyWindow.restore();
    return SpotifyWindow.maximize();
})
ipcMain.on('Minimize', () => {
    SpotifyWindow.minimize()
});
ipcMain.on('Close', () => {
    SpotifyWindow.close()
});