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
var skill_class_1 = require('../skill-class');
var mastermind_1 = require('./mastermind');
var MastermindSkillClassProvider = (function () {
    function MastermindSkillClassProvider(Medic // TODO add more
        ) {
        this.SKILL_CLASS = new skill_class_1.SkillClassModel("Mastermind", Medic.getSkillTree(), Medic.getSkillTree(), // TODO add more
        Medic.getSkillTree());
    }
    MastermindSkillClassProvider.prototype.getSkillClass = function () {
        return this.SKILL_CLASS;
    };
    MastermindSkillClassProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [mastermind_1.MedicSkillTreeProvider])
    ], MastermindSkillClassProvider);
    return MastermindSkillClassProvider;
}());
exports.MastermindSkillClassProvider = MastermindSkillClassProvider;
//# sourceMappingURL=mastermind.skill-class.provider.js.map