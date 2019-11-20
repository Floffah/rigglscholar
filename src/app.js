let {
    BrowserWindow,
    app
} = require('electron'),
    path = require('path');

if(process.argv.includes("--dev")) {
    require('electron-debug')();
}

app.on('ready', () => {
    let display = require('electron').screen.getPrimaryDisplay(),
        win = new BrowserWindow({
            title: 'Riggl Scholar',
            minWidth: 600,
            minHeight: 400,
            center: true,
            frame: false,
            fullscreen: false,
            webPreferences: {
                contextIsolation: false,
                nodeIntegration: true
            },
            show: false,
        });

    win.loadURL(path.join(__dirname, "../media/ui", "index.html"));

    win.on('ready-to-show', () => {
        win.show();
        win.maximize();
    });
});