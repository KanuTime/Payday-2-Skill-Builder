"use strict";
var SkillInfoConfig = (function () {
    function SkillInfoConfig() {
    }
    Object.defineProperty(SkillInfoConfig.prototype, "activeSkill", {
        set: function (skill) {
            this.skill = skill;
        },
        enumerable: true,
        configurable: true
    });
    return SkillInfoConfig;
}());
exports.SkillInfoConfig = SkillInfoConfig;
//# sourceMappingURL=skill-info.config.js.map