"use strict";
var SkillBuildModel = (function () {
    function SkillBuildModel(mastermind, enforcer, technician, ghost, fugitive) {
        this.mastermind = mastermind;
        this.enforcer = enforcer;
        this.technician = technician;
        this.ghost = ghost;
        this.fugitive = fugitive;
        Object.freeze(this);
    }
    return SkillBuildModel;
}());
exports.SkillBuildModel = SkillBuildModel;
//# sourceMappingURL=skill-build.model.js.map