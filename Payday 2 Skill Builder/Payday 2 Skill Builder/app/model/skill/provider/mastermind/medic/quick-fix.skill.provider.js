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
var QuickFixSkillProvider = (function () {
    function QuickFixSkillProvider() {
    }
    QuickFixSkillProvider.prototype.getSkill = function () {
        return QUICK_FIX;
    };
    QuickFixSkillProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QuickFixSkillProvider);
    return QuickFixSkillProvider;
}());
exports.QuickFixSkillProvider = QuickFixSkillProvider;
var QUICK_FIX = new skill_1.SkillModel("Quick Fix", "Decreases your first aid kit and doctor bag deploy time by 50%.", "Crew members that use your first aid kits or doctor bags take 15% less damage for 120 seconds.", "ImageEmpty", "ImageBasic", "ImageAced", [], []);
//# sourceMappingURL=quick-fix.skill.provider.js.map