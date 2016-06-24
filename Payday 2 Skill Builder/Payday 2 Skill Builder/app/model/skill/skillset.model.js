"use strict";
// Immutable
var Skillset = (function () {
    function Skillset(mastermind, enforcer, technician, ghost, fugitive) {
        this.mastermind = mastermind;
        this.enforcer = enforcer;
        this.technician = technician;
        this.ghost = ghost;
        this.fugitive = fugitive;
    }
    Skillset.prototype.getSkillClasses = function () {
        return [
            this.mastermind,
            this.enforcer,
            this.technician,
            this.ghost,
            this.fugitive
        ];
    };
    Skillset.prototype.getSkills = function () {
        return this.mastermind.getSkills()
            .concat(this.enforcer.getSkills())
            .concat(this.technician.getSkills())
            .concat(this.ghost.getSkills())
            .concat(this.fugitive.getSkills());
    };
    return Skillset;
}());
exports.Skillset = Skillset;
//# sourceMappingURL=skillset.model.js.map