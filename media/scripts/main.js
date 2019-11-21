let TB = require('custom-electron-titlebar'),
    {Menu, shell, getCurrentWindow, BrowserWindow} = require('electron').remote,
    Remquire = require('electron').remote.require,
    titlebar = new TB.Titlebar({
        backgroundColor: TB.Color.fromHex("#74c0fc"),
        menu: Menu.buildFromTemplate([
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
        ])
    }),
    {
        app
    } = require('electron').remote,
    low = require('lowdb'),
    fisy = require('lowdb/adapters/FileSync'),
    path = require('path'),
    settings = low(new fisy(path.join(app.getPath("userData"), "settings.json"))),
    events = Remquire('../src/events.js')

setTimeout(() => {
    started();
}, 1000);

function started() {
    setTimeout(() => {
        $(".expandanim").css({
            width: "100%",
            height: "100%",
            top: "0px",
            left: "0px",
        });
        setTimeout(() => {
            $$.loading.showcover(false);
            $(".content").load("../ui/home.html");
            $(".content").removeClass("rainbow");
            setTimeout(() => {
                postsetup();
            }, 500);
        }, 1000);
    }, 1000);
}

function postsetup() {
    let group = $$.choosemenu.creategroup();

    group.addMenu($$.choosemenu.createmenu("What color theme do you want to use?",
        $$.choosemenu.createchoice("Dark Theme", "A dark, more easy on the eyes, theme."),
        $$.choosemenu.createchoice("Light Theme", "A lighter, better for bright environments, theme."),
        "These can be changed later!"));
    group.addMenu($$.choosemenu.createmenu("Are you in college or university?",
        $$.choosemenu.createchoice("Yes", "If you are in college or university, you may not get access to everything."),
        $$.choosemenu.createchoice("No", "You will get access to everything as long as you verify you are a student."),
        "This cannot be changed later."));

    if (!settings.get("firstrun").value()) {
        $(".content").html("<div class=\"setuppopup\">" + group.getOutput() + "</div>");
    } else if(!settings.get("setup").value()) {
        $(".content").load("../ui/setup.html", () => {
            $(".ghloginbtn").click(() => {
                let loginwin = new BrowserWindow({
                    height: 600,
                    width: 500,
                    resizable: false,
                    maximizable: false,
                    parent: getCurrentWindow(),
                    modal: true
                });
                loginwin.setMenu(null);
                loginwin.loadURL(`https://github.com/login/oauth/authorize?scope=user&client_id=${require('../../cfg/gh.json').clientid}`);
            });
            $(".ghhelp").click(() => {
                shell.openExternal("https://github.com/Floffah/rigglscholar/wiki/Why-we-use-GitHub");
            });
        });
    } else {
        let loginwin = new BrowserWindow({
            height: 600,
            width: 500,
            resizable: false,
            maximizable: false,
            parent: getCurrentWindow(),
            modal: true,
            closable: false,
        });
        loginwin.setMenu(null);
        loginwin.loadURL(`https://github.com/login/oauth/authorize?scope=user&client_id=${require('../../cfg/gh.json').clientid}`);
    }
    $$.loading.hidecover();
    $$.choosemenu.register(group);

    group.done((inf) => {
        console.log(inf);
        $$.loading.showhide(false, () => {
            $(".content").load("../ui/setup.html");
        });
        settings.set("darkmode", inf[0][1] == 0 ? true : false).write();
        settings.set("collegeoruni", inf[1][1] == 2 ? false : true).write();
        settings.set("firstrun", true).write();
    });
}

events.on('login', (inf) => {
    let data = JSON.parse(inf);
    $(".ghloginbtn").html(`<p>Logged in as <strong>${data.login}</strong></p>`);
    if(!settings.get('setup').value()) {
        settings.set('setup', true).write();
    }
    $(".content").load("../ui/ui.html");
});