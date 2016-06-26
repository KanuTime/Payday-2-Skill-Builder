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
var MastermindMedicProvider = (function () {
    function MastermindMedicProvider() {
        this.SKILL_TREE = new skill_tree_1.SkillTree("Medic", TIER_1, TIER_2_L, TIER_2_R, TIER_3_L, TIER_3_R, TIER_4);
    }
    MastermindMedicProvider.prototype.getSkillTree = function () {
        return this.SKILL_TREE;
    };
    MastermindMedicProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MastermindMedicProvider);
    return MastermindMedicProvider;
}());
exports.MastermindMedicProvider = MastermindMedicProvider;
var TIER_1 = new skill_tree_1.SkillModel("Combat Medic", "You gain 30% damage reduction for 5 seconds both after and during reviving another player.", "Reviving a crew member gives them 30% more health.", "Image", [], []);
var TIER_2_L = new skill_tree_1.SkillModel("Quick Fix", "Decreases your first aid kit and doctor bag deploy time by 50%.", "Crew members that use your first aid kits or doctor bags take 15% less damage for 120 seconds.", "Image", [], []);
var TIER_2_R = new skill_tree_1.SkillModel("Painkillers", "Crew members you revive take 30% less damage for 5 seconds.", "The damage reduction is increased by an additional 50%.", "Image", [], []);
var TIER_3_L = new skill_tree_1.SkillModel("Uppers", "Adds 7 more first aid kits to your inventory.", "Adds 3 more first aid kits to your inventory. Your deployed first aid kits will be automatically used if a player would go down within a 5 meter radius of the first aid kit.", "Image", [], []);
var TIER_3_R = new skill_tree_1.SkillModel("Combat Doctor", "You can now place 2 doctor bags instead of just one.", "Your doctor bags have 2 more charges.", "Image", [], []);
var TIER_4 = new skill_tree_1.SkillModel("Inspire", "You revive crew members 50% faster. Shouting at your teammates will increase their movement speed by 20% for 30 seconds.", "There is a 100% chance that you can revive crew members at a distance by shouting at them. This cannot occur more than once every 20 seconds.", "Image", [], []);
//# sourceMappingURL=mastermind.medic.provider.js.map