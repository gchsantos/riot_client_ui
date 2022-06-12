const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

windowArgs = {
    'initialWindowPath': './login-screen/index.html',
}

let mainWindow;

function createWindow({ initialWindowPath }) {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        frame: false,
        titleBarStyle: 'customButtonsOnHover',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
            devTools: true,
        }
    })
    mainWindow.loadFile(initialWindowPath);
}

function main(path) {
    app.whenReady().then(() => {
        createWindow(windowArgs);
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) createWindow(windowArgs);
        })
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })

    ipcMain.on('app/close', () => {
        app.quit();
    })

    ipcMain.on('app/minimize', () => {
        mainWindow.minimize();
    })
}

main('./login-screen/index.html')