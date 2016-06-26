"use strict";
var skill_class_1 = require('../skill-class');
var SkillBuildConfig = (function () {
    function SkillBuildConfig(model) {
        this.mastermind = new skill_class_1.SkillClassConfig(model.mastermind);
        this.enforcer = new skill_class_1.SkillClassConfig(model.enforcer);
        this.technician = new skill_class_1.SkillClassConfig(model.technician);
        this.ghost = new skill_class_1.SkillClassConfig(model.ghost);
        this.fugitive = new skill_class_1.SkillClassConfig(model.fugitive);
        Object.freeze(this);
    }
    Object.defineProperty(SkillBuildConfig.prototype, "classes", {
        get: function () {
            return [
                this.mastermind,
                this.enforcer,
                this.technician,
                this.ghost,
                this.fugitive
            ];
        },
        enumerable: true,
        configurable: true
    });
    return SkillBuildConfig;
}());
exports.SkillBuildConfig = SkillBuildConfig;
//# sourceMappingURL=skill-build.config.js.map