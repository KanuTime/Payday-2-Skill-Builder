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
var UppersSkillProvider = (function () {
    function UppersSkillProvider() {
    }
    UppersSkillProvider.prototype.getSkill = function () {
        return UPPERS;
    };
    UppersSkillProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UppersSkillProvider);
    return UppersSkillProvider;
}());
exports.UppersSkillProvider = UppersSkillProvider;
var UPPERS = new skill_1.SkillModel("Uppers", "Adds 7 more first aid kits to your inventory.", "Adds 3 more first aid kits to your inventory. Your deployed first aid kits will be automatically used "
    + "if a player would go down within a 5 meter radius of the first aid kit.", "ImageEmpty", "ImageBasic", "ImageAced", [], []);
//# sourceMappingURL=uppers.skill.provider.js.map