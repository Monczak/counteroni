const { ipcRenderer } = require(`electron`)

init = () => {
    document.querySelector(`#close-btn`).addEventListener(`click`, () => {
        console.log(`Closing!`)
        ipcRenderer.send(`close-app`)
    })
    console.log(`Init finished`)
}

init()