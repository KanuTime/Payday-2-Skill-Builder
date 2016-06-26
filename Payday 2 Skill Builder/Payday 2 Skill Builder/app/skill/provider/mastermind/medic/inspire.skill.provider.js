"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var skill_1 = require('../../../skill');
var InspireSkillProvider = (function () {
    function InspireSkillProvider() {
    }
    InspireSkillProvider.prototype.getSkill = function () {
        return INSPIRE;
    };
    InspireSkillProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], InspireSkillProvider);
    return InspireSkillProvider;
}());
exports.InspireSkillProvider = InspireSkillProvider;
var INSPIRE = new skill_1.SkillModel("Inspire", "You revive crew members 50% faster. Shouting at your teammates will increase their movement speed by 20% for 30 seconds.", "There is a 100% chance that you can revive crew members at a distance by shouting at them. This cannot occur more "
    + "than once every 20 seconds.", "ImageEmpty", "ImageBasic", "ImageAced", [], []);
//# sourceMappingURL=inspire.skill.provider.js.map