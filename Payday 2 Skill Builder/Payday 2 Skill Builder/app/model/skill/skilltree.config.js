"use strict";
// Mutable
var SkillConfig = (function () {
    function SkillConfig(skills) {
        this.skills = skills;
    }
    SkillConfig.prototype.setState = function (skill, state) {
        this.skills.set(skill, state);
    };
    SkillConfig.prototype.getState = function (skill) {
        return this.skills.get(skill);
    };
    return SkillConfig;
}());
exports.SkillConfig = SkillConfig;
//# sourceMappingURL=skilltree.config.js.map