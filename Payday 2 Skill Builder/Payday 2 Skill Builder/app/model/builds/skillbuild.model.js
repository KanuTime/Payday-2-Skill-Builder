"use strict";
// Mutable
var SkillBuild = (function () {
    function SkillBuild(skills) {
        this.skills = skills;
    }
    SkillBuild.prototype.setState = function (skill, state) {
        this.skills.set(skill, state);
    };
    SkillBuild.prototype.getState = function (skill) {
        return this.skills.get(skill);
    };
    return SkillBuild;
}());
exports.SkillBuild = SkillBuild;
//# sourceMappingURL=skillbuild.model.js.map