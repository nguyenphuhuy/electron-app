const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron")

let mainWindow;
function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: "hhihi",
        width: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true,       
            contextIsolation: false,   
          }
    });

    mainWindow.webContents.openDevTools()

    mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
    // mainWindow.loadURL("https://class-display-api.fansipan.technology/docs")

    mainWindow.on("closed", () => {
        mainWindow = null
    })

    mainWindow.webContents.send("data", {
        content: "abcc"
    })

    let a = 1;
    setInterval(() => {
        a++; 
        mainWindow.webContents.send("data", {
            content: "abcc-"+a
        })
    }, 3000)
}

app.on('ready', createMainWindow)

