"use strict";
var SkillClassModel = (function () {
    function SkillClassModel(name, left, middle, right) {
        this.name = name;
        this.left = left;
        this.middle = middle;
        this.right = right;
        Object.freeze(this);
    }
    return SkillClassModel;
}());
exports.SkillClassModel = SkillClassModel;
//# sourceMappingURL=skill-class.model.js.map