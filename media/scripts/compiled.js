"use strict";

var $$ = {};
$$.dev = {};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$$.choosemenu = {};
$$.dev.registeredmenus = [];

var choiceGroup =
/*#__PURE__*/
function () {
  function choiceGroup() {
    _classCallCheck(this, choiceGroup);

    this._choiceMenus = [];
    this._openchoice = 0;
  }

  _createClass(choiceGroup, [{
    key: "addMenu",
    value: function addMenu(menu) {
      this._choiceMenus.push(menu);
    }
  }, {
    key: "done",
    value: function done(fn) {
      this._donefunction = fn;
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      var _this = this;

      var menus = "";

      this._choiceMenus.forEach(function (menu) {
        var menuhtml = "<div menuindex=\"".concat(_this._choiceMenus.indexOf(menu), "\" chosen=\"0\" class=\"achoose ").concat(_this._choiceMenus.indexOf(menu) == _this._openchoice ? "show" : "", "\"><h1 class=\"title\">").concat(menu._name, "</h1><div class=\"choice chosen\" choice=\"0\"><h1>").concat(menu._choice[0].name, "</h1><p>").concat(menu._choice[0].desc, "</p></div><div class=\"choice\" choice=\"1\"><h1>").concat(menu._choice[1].name, "</h1><p>").concat(menu._choice[1].desc, "</p></div>").concat(menu._message ? "<p class=\"message\">".concat(menu._message, "</p>") : "", "</div>");
        menus += menuhtml;
      });

      return "<div class=\"choosegroup\">".concat(menus, "<button class=\"skipdone\">Next</button></div>");
    }
  }]);

  return choiceGroup;
}();

var chooseMenu =
/*#__PURE__*/
function () {
  function chooseMenu(name) {
    _classCallCheck(this, chooseMenu);

    this._name = name;
    this._choice = [];
    this._message = undefined;
  }

  _createClass(chooseMenu, [{
    key: "setFirstChoice",
    value: function setFirstChoice(choice) {
      this._choice[0] = choice;
    }
  }, {
    key: "setSecondChoice",
    value: function setSecondChoice(choice) {
      this._choice[1] = choice;
    }
  }, {
    key: "setMessage",
    value: function setMessage(message) {
      this._message = message;
    }
  }]);

  return chooseMenu;
}();

$$.choosemenu.createmenu = function (name, choice, choice2, message) {
  var menu = new chooseMenu(name);
  menu.setFirstChoice(choice);
  menu.setSecondChoice(choice2);

  if (message) {
    menu.setMessage(message);
  } else {
    menu.setMessage(message);
  }

  return menu;
};

$$.choosemenu.createchoice = function (name, desc, choose) {
  return {
    name: name,
    desc: desc,
    pos: "auto",
    choose: choose
  };
};

$$.choosemenu.creategroup = function () {
  return new choiceGroup();
};

var register;
var donenextregister;

$$.choosemenu.register = function (group) {
  register = $(".choice").on("click", function (event) {
    $(".choice").removeClass("chosen");
    $(event.target).addClass("chosen");
    $(event.target).parent().attr("chosen", $(event.target).attr("choice"));
  });
  donenextregister = $(".skipdone").on("click", function (event) {
    if (group._openchoice == group._choiceMenus.length - 1) {
      var doneinf = [];

      group._choiceMenus.forEach(function (menu) {
        doneinf.push([group._choiceMenus.indexOf(menu), $(".achoose[menuindex=".concat(group._choiceMenus.indexOf(menu), "]")).attr("chosen")]);
      });

      group._donefunction(doneinf);
    } else {
      group._openchoice += 1;
      $(".achoose").removeClass("show");
      $(".achoose[menuindex=".concat(group._openchoice, "]")).addClass("show");

      if (group._openchoice == group._choiceMenus.length - 1) {
        $(".skipdone").text("Done");
      }
    }
  });
};

$$.choosemenu.deregister = function () {
  register = undefined;
  donenextregister = undefined;
};
"use strict";

$$.loading = {};

$$.loading.showcover = function (_double) {
  if (_double === true) {
    $(".loadcover").addClass("show");
    $(".loadcover").addClass("double");
  } else {
    $(".loadcover").addClass("show");
    $(".loadcover").addClass("ring");
  }
};

$$.loading.hidecover = function () {
  $(".loadcover").removeClass("show");
  $(".loadcover").removeClass("double");
  $(".loadcover").removeClass("ring");
};

//# sourceMappingURL=compiled.js.map