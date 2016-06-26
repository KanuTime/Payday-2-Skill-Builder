"use strict";
// Immutable
var SkillClass = (function () {
    function SkillClass(name, left, middle, right) {
        this.name = name;
        this.left = left;
        this.middle = middle;
        this.right = right;
        Object.freeze(this);
    }
    SkillClass.prototype.getSkills = function () {
        return this.left.getSkills()
            .concat(this.middle.getSkills())
            .concat(this.right.getSkills());
    };
    return SkillClass;
}());
exports.SkillClass = SkillClass;
//# sourceMappingURL=skillclass.model.js.map