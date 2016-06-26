"use strict";
// Immutable
var SkillSet = (function () {
    function SkillSet(mastermind, enforcer, technician, ghost, fugitive) {
        this.mastermind = mastermind;
        this.enforcer = enforcer;
        this.technician = technician;
        this.ghost = ghost;
        this.fugitive = fugitive;
    }
    SkillSet.prototype.getSkillClasses = function () {
        return [
            this.mastermind,
            this.enforcer,
            this.technician,
            this.ghost,
            this.fugitive
        ];
    };
    SkillSet.prototype.getSkills = function () {
        return this.mastermind.getSkills()
            .concat(this.enforcer.getSkills())
            .concat(this.technician.getSkills())
            .concat(this.ghost.getSkills())
            .concat(this.fugitive.getSkills());
    };
    return SkillSet;
}());
exports.SkillSet = SkillSet;
//# sourceMappingURL=skillset.model.js.map