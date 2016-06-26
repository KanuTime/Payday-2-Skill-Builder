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
var PainkillersSkillProvider = (function () {
    function PainkillersSkillProvider() {
    }
    PainkillersSkillProvider.prototype.getSkill = function () {
        return PAINKILLERS;
    };
    PainkillersSkillProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PainkillersSkillProvider);
    return PainkillersSkillProvider;
}());
exports.PainkillersSkillProvider = PainkillersSkillProvider;
var PAINKILLERS = new skill_1.SkillModel("Painkillers", "Crew members you revive take 30% less damage for 5 seconds.", "The damage reduction is increased by an additional 50%.", "ImageEmpty", "ImageBasic", "ImageAced", [], []);
//# sourceMappingURL=painkillers.skill.provider.js.map