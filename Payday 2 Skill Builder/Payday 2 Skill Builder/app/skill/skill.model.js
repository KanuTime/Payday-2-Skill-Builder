"use strict";
// Immutable
var Skill = (function () {
    function Skill(name, basicDescription, acedDescription, image, basicEffects, acedEffects) {
        this.name = name;
        this.basicDescription = basicDescription;
        this.acedDescription = acedDescription;
        this.image = image;
        this.basicEffects = basicEffects;
        this.acedEffects = acedEffects;
        Object.freeze(this);
    }
    Skill.prototype.getDescription = function (state) {
        switch (state) {
            case SkillState.ACED: return this.acedDescription;
            case SkillState.BASIC: return this.basicDescription;
            default: return "";
        }
    };
    Skill.prototype.getImage = function (state) {
        return this.image; // TODO multiple possible images (empy, basic, aced)
    };
    Skill.prototype.getEffects = function (state) {
        switch (state) {
            case SkillState.ACED: return this.acedEffects;
            case SkillState.BASIC: return this.basicEffects;
            default: return [];
        }
    };
    return Skill;
}());
exports.Skill = Skill;
(function (SkillState) {
    SkillState[SkillState["EMPTY"] = 0] = "EMPTY";
    SkillState[SkillState["BASIC"] = 1] = "BASIC";
    SkillState[SkillState["ACED"] = 2] = "ACED";
})(exports.SkillState || (exports.SkillState = {}));
var SkillState = exports.SkillState;
//# sourceMappingURL=skill.model.js.map