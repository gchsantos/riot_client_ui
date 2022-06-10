const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow(path) {
    mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        frame: false,
        titleBarStyle: 'customButtonsOnHover',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            isOffscreen: true
        }
    })
    mainWindow.loadFile(path);
}

function main(path) {
    app.whenReady().then(() => {
        createWindow(path);
        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) createWindow('./login-screen/index.html');
        })
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
}

main('./login-screen/index.html')