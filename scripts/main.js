const { app, BrowserWindow } = require(`electron`);

createWindow = () => {
    let win = new BrowserWindow({
        width: 300,
        height: 200
    })

    win.loadFile(`counteroni/html/index.html`)

    win.on(`closed`, () => {
        win = null
    })
}

app.on(`ready`, createWindow)