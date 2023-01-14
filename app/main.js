const { app, BrowserWindow, ipcMain } = require('electron');
const item = require('./models/item_estoque.js');
require("electron-reload")(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require("../node_modules/electron"),
});
var estoque = new item;
const path = require('path')

var mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },

      show: false,
    });
    mainWindow.loadFile("./templates/index.html");
    mainWindow.maximize();
    mainWindow.show();
}

ipcMain.on("openChildWindow", (event, arg) => {
  estoque.createChildWindow(mainWindow);
});

ipcMain.on("vizualizar", (event, arg) => {
  estoque.vizualizar_estoque();
  
});
  
app.whenReady().then(() => {
  createWindow();
  
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
  
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});