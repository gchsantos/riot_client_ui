const { ipcRenderer } = require('electron');

const mainWindow = {
    close: () => ipcRenderer.send('app/close'),
    minimize: () => ipcRenderer.send('app/minimize'),
}

module.exports = {
    mainWindow
}