const { contextBridge } = require('electron');
const { mainWindow } = require('./window')

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
})

const API = {
    window: mainWindow
}

contextBridge.exposeInMainWorld("app", API)
