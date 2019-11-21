let {
    BrowserWindow,
    app,
    Menu
} = require('electron'),
    path = require('path'),
    events = require('./events');

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
    require('./localapi');
    win.on('ready-to-show', () => {
        win.show();
        win.setMenu(Menu.buildFromTemplate([
            {
                label: 'Window',
                submenu: [
                    {
                        role: 'reload'
                    },
                    {
                        role: 'forceReload'
                    }
                ]
            }
        ]));
        win.maximize();
    });
});