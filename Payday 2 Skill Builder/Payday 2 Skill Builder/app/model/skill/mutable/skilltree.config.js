"use strict";
// Mutable
var SkillTreeConfig = (function () {
    function SkillTreeConfig(skills) {
        this.skills = skills;
    }
    SkillTreeConfig.prototype.setState = function (skill, state) {
        this.skills.set(skill, state);
    };
    SkillTreeConfig.prototype.getState = function (skill) {
        return this.skills.get(skill);
    };
    return SkillTreeConfig;
}());
exports.SkillTreeConfig = SkillTreeConfig;
//# sourceMappingURL=skilltree.config.js.map