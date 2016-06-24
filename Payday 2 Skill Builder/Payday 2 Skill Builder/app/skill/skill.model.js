"use strict";
var index_1 = require('./index');
// Immutable
var Skill = (function () {
    function Skill(name, description, image, basic, aced) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.basic = basic;
        this.aced = aced;
        Object.freeze(this);
    }
    Skill.prototype.getImage = function (state) {
        return this.image; // TODO multiple possible images (empy, basic, aced)
    };
    Skill.prototype.getEffects = function (state) {
        switch (state) {
            case index_1.SkillState.ACED: return this.aced;
            case index_1.SkillState.BASIC: return this.basic;
            default: return [];
        }
    };
    return Skill;
}());
exports.Skill = Skill;
//# sourceMappingURL=skill.model.js.map