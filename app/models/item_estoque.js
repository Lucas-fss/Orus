const { app, BrowserWindow } = require('electron')
class ItemEstoque{
    createChildWindow(mainWindow) {
        var childWindow = new BrowserWindow({
            width: 1000,
            height: 700,
            modal: true,
            show: false,
            parent: mainWindow, // Make sure to add parent window here
        
            // Make sure to add webPreferences with below configuration
            webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            },
        });
        
        // Child window loads settings.html file
        childWindow.loadFile("./templates/item_estoque.html");
        
        childWindow.once("ready-to-show", () => {
            childWindow.show();
        });
    }

    vizualizar_estoque(){
        var vizualizar = new BrowserWindow({
            width: 1000,
            height: 700,
            modal: true,
            show: false,
        
            // Make sure to add webPreferences with below configuration
            webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            },
        });

        vizualizar.loadFile("./templates/vizualizar_estoque.html");
        
        vizualizar.once("ready-to-show", () => {
            vizualizar.show();
        });
    }
}

module.exports = ItemEstoque;