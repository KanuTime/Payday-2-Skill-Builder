"use strict";
var ArmorSet = (function () {
    function ArmorSet(armors) {
        this.armors = armors;
        this.selected = armors[0];
    }
    ArmorSet.prototype.setSelected = function (armor) {
        this.selected = armor;
    };
    return ArmorSet;
}());
exports.ArmorSet = ArmorSet;
//# sourceMappingURL=armor-selection.model.js.map