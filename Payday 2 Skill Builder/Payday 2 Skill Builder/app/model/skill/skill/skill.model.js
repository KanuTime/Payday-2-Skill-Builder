"use strict";
// Immutable
var SkillModel = (function () {
    function SkillModel(name, descriptionBasic, descriptionAced, imageEmpty, imageBasic, imageAced, effectsBasic, effectsAced) {
        this.name = name;
        this.descriptionBasic = descriptionBasic;
        this.descriptionAced = descriptionAced;
        this.imageEmpty = imageEmpty;
        this.imageBasic = imageBasic;
        this.imageAced = imageAced;
        this.effectsBasic = effectsBasic;
        this.effectsAced = effectsAced;
        Object.freeze(this);
    }
    return SkillModel;
}());
exports.SkillModel = SkillModel;
//# sourceMappingURL=skill.model.js.map