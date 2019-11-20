$$.choosemenu = {};
$$.dev.registeredmenus = [];

class choiceGroup {
    constructor() {
        this._choiceMenus = [];
        this._openchoice = 0;
    }

    addMenu(menu) {
        this._choiceMenus.push(menu);
    }

    done(fn) {
        this._donefunction = fn;
    }

    getOutput() {
        let menus = ``;
        this._choiceMenus.forEach((menu) => {
            var menuhtml = `<div menuindex="${this._choiceMenus.indexOf(menu)}" chosen="0" class="achoose ${this._choiceMenus.indexOf(menu) == this._openchoice ? "show" : ""}"><h1 class="title">${menu._name}</h1><div class="choice chosen" choice="0"><h1>${menu._choice[0].name}</h1><p>${menu._choice[0].desc}</p></div><div class="choice" choice="1"><h1>${menu._choice[1].name}</h1><p>${menu._choice[1].desc}</p></div>${menu._message ? `<p class="message">${menu._message}</p>` : ""}</div>`;
            menus += menuhtml
        });
        return `<div class="choosegroup">${menus}<button class="skipdone">Next</button></div>`;
    }
}

class chooseMenu {
    constructor(name) {
        this._name = name;
        this._choice = [];
        this._message = undefined;
    }

    setFirstChoice(choice) {
        this._choice[0] = choice;
    }

    setSecondChoice(choice) {
        this._choice[1] = choice;
    }

    setMessage(message) {
        this._message = message;
    }
}

$$.choosemenu.createmenu = (name, choice, choice2, message) => {
    let menu = new chooseMenu(name);
    menu.setFirstChoice(choice);
    menu.setSecondChoice(choice2);
    if (message) {
        menu.setMessage(message);
    } else {
        menu.setMessage(message);
    }
    return menu;
};
$$.choosemenu.createchoice = (name, desc, choose) => {
    return {
        name: name,
        desc: desc,
        pos: "auto",
        choose: choose
    };
};
$$.choosemenu.creategroup = () => {
    return new choiceGroup();
};

var register;
var donenextregister;

$$.choosemenu.register = (group) => {
    register = $(".choice").on("click", (event) => {
        $(`.achoose[menuindex=${group._openchoice}] .choice`).removeClass("chosen");
        $(event.target).addClass("chosen");
        $(event.target).parent().attr("chosen", $(event.target).attr("choice"));
    });

    donenextregister = $(".skipdone").on("click", (event) => {
        if(group._openchoice == (group._choiceMenus.length - 1)) {
            let doneinf = [];
            group._choiceMenus.forEach((menu) => {
                doneinf.push([group._choiceMenus.indexOf(menu), $(`.achoose[menuindex=${group._choiceMenus.indexOf(menu)}]`).attr("chosen")]);
            });
            group._donefunction(doneinf);
        } else {
            group._openchoice += 1;
            $(".achoose").removeClass("show");
            $(`.achoose[menuindex=${group._openchoice}]`).addClass("show");
            if(group._openchoice == (group._choiceMenus.length - 1)) {
                $(".skipdone").text("Done");
            }
        }
    });
};

$$.choosemenu.deregister = () => {
    register = undefined;
    donenextregister = undefined;
};