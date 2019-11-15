"use strict";

var $$ = {};
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$$.choosemenu = {};

var choiceGroup =
/*#__PURE__*/
function () {
  function choiceGroup() {
    _classCallCheck(this, choiceGroup);

    this._choiceMenus = [];
  }

  _createClass(choiceGroup, [{
    key: "addMenu",
    value: function addMenu(menu) {
      this._choiceMenus.push(menu);
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      var _this = this;

      var menus = "";

      this._choiceMenus.forEach(function (menu) {
        menus += "<div menuindex=\"".concat(_this._choiceMenus.indexOf(menu), "\" chosen=\"0\"><h1 class=\"title\">").concat(menu._name, "</h1><div class=\"choice\" choice=\"0\"><h1>").concat(menu._choice[0].name, "</h1><p>").concat(menu._choice[0].desc, "</p></div><div class=\"choice\" choice=\"1\"><h1>").concat(menu._choice[1].name, "</h1><p>").concat(menu._choice[1].desc, "</p></div></div>");
      });

      return "<div class=\"choosegroup\">".concat(menus, "</div>");
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
  }]);

  return chooseMenu;
}();

$$.choosemenu.createmenu = function (name, choice, choice2) {
  var menu = new chooseMenu(name);
  menu.setFirstChoice(choice);
  menu.setSecondChoice(choice2);
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