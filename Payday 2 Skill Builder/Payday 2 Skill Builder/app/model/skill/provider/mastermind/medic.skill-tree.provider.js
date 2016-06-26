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
var skill_tree_1 = require('../../skill-tree');
var medic_1 = require('./medic');
var MedicSkillTreeProvider = (function () {
    function MedicSkillTreeProvider(CombatMedic, QuickFix, Painkillers, Uppers, CombatDoctor, Inspire) {
        this.SKILL_TREE = new skill_tree_1.SkillTreeModel("Medic", CombatMedic.getSkill(), QuickFix.getSkill(), Painkillers.getSkill(), Uppers.getSkill(), CombatDoctor.getSkill(), Inspire.getSkill());
    }
    MedicSkillTreeProvider.prototype.getSkillTree = function () {
        return this.SKILL_TREE;
    };
    MedicSkillTreeProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [medic_1.CombatMedicSkillProvider, medic_1.QuickFixSkillProvider, medic_1.PainkillersSkillProvider, medic_1.UppersSkillProvider, medic_1.CombatDoctorSkillProvider, medic_1.InspireSkillProvider])
    ], MedicSkillTreeProvider);
    return MedicSkillTreeProvider;
}());
exports.MedicSkillTreeProvider = MedicSkillTreeProvider;
//# sourceMappingURL=medic.skill-tree.provider.js.map