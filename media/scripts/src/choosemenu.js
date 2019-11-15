$$.choosemenu = {};

class choiceGroup {
    constructor() {
        this._choiceMenus = [];
    }

    addMenu(menu) {
        this._choiceMenus.push(menu);
    }

    getOutput() {
        let menus = ``;
        this._choiceMenus.forEach((menu) => {
            menus += `<div menuindex="${this._choiceMenus.indexOf(menu)}" chosen="0"><h1 class="title">${menu._name}</h1><div class="choice" choice="0"><h1>${menu._choice[0].name}</h1><p>${menu._choice[0].desc}</p></div><div class="choice" choice="1"><h1>${menu._choice[1].name}</h1><p>${menu._choice[1].desc}</p></div></div>`;
        });
        return `<div class="choosegroup">${menus}</div>`;
    }
}

class chooseMenu {
    constructor(name) {
        this._name = name;
        this._choice = [];
    }

    setFirstChoice(choice) {
        this._choice[0] = choice;
    }

    setSecondChoice(choice) {
        this._choice[1] = choice;
    }
}

$$.choosemenu.createmenu = (name, choice, choice2) => {
    let menu = new chooseMenu(name);
    menu.setFirstChoice(choice);
    menu.setSecondChoice(choice2);
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