const { app, BrowserWindow, ipcMain } = require(`electron`);

mainWindow = null
subWindow = null

createMainWindow = () => {
    let win = new BrowserWindow({
        width: 300,
        height: 450,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile(`counteroni/html/main.html`)

    win.on(`closed`, () => {
        win = null
    })

    win.once(`ready-to-show`, () => {
        win.show()
    })

    return win
}

createSubWindow = () => {
    let win = new BrowserWindow({
        width: 800,
        height: 200,
        frame: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile(`counteroni/html/sub.html`)

    win.on(`closed`, () => {
        win = null
    })

    win.once(`ready-to-show`, () => {
        win.show()
    })

    return win
}

app.on(`ready`, () => {
    mainWindow = createMainWindow()
    subWindow = createSubWindow()
})

ipcMain.on(`close-app`, (event, arg) => {
    app.quit()
})