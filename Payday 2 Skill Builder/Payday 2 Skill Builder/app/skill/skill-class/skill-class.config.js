"use strict";
var skill_tree_1 = require('../skill-tree');
var SkillClassConfig = (function () {
    function SkillClassConfig(model) {
        this.name = model.name;
        this.left = new skill_tree_1.SkillTreeConfig(model.left);
        this.middle = new skill_tree_1.SkillTreeConfig(model.middle);
        this.right = new skill_tree_1.SkillTreeConfig(model.right);
        Object.freeze(this);
    }
    return SkillClassConfig;
}());
exports.SkillClassConfig = SkillClassConfig;
//# sourceMappingURL=skill-class.config.js.map