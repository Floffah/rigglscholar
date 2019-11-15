let TB = require('custom-electron-titlebar'),
    titlebar = new TB.Titlebar({
        backgroundColor: TB.Color.fromHex("#74c0fc")
    }),
    {app} = require('electron').remote,
    low = require('lowdb'),
    fisy = require('lowdb/adapters/FileSync'),
    path = require('path'),
    settings = low(new fisy(path.join(app.getPath("userData"), "settings.json")));

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

    group.addMenu($$.choosemenu.createmenu("What color theme do you want to use?", $$.choosemenu.createchoice("Dark Theme", "A dark, more easy on the eyes, theme."), $$.choosemenu.createchoice("Light Theme", "A lighter, better for bright environments, theme.")));
    
    console.log(group.getOutput());
    
    if(!settings.get("setup").value()) {
        $(".content").html("<div class=\"setuppopup\">" + group.getOutput() + "</div>");
    }
    $$.loading.hidecover();
}