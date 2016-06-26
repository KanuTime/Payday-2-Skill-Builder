"use strict";
var skill_1 = require('../skill');
var SkillTreeConfig = (function () {
    function SkillTreeConfig(model) {
        this.name = model.name;
        this.tier_1 = new skill_1.SkillConfig(model.tier_1, COSTS_BASIC_TIER_1, COSTS_ACED_TIER_1);
        this.tier_2_l = new skill_1.SkillConfig(model.tier_2_l, COSTS_BASIC_TIER_2, COSTS_ACED_TIER_2);
        this.tier_2_r = new skill_1.SkillConfig(model.tier_2_r, COSTS_BASIC_TIER_2, COSTS_ACED_TIER_2);
        this.tier_3_l = new skill_1.SkillConfig(model.tier_3_l, COSTS_BASIC_TIER_3, COSTS_ACED_TIER_3);
        this.tier_3_r = new skill_1.SkillConfig(model.tier_3_r, COSTS_BASIC_TIER_3, COSTS_ACED_TIER_3);
        this.tier_4 = new skill_1.SkillConfig(model.tier_4, COSTS_BASIC_TIER_4, COSTS_ACED_TIER_4);
        Object.freeze(this);
    }
    return SkillTreeConfig;
}());
exports.SkillTreeConfig = SkillTreeConfig;
// Costs basic
var COSTS_BASIC_TIER_1 = 1;
var COSTS_BASIC_TIER_2 = 2;
var COSTS_BASIC_TIER_3 = 3;
var COSTS_BASIC_TIER_4 = 4;
// Costs aced
var COSTS_ACED_TIER_1 = 3;
var COSTS_ACED_TIER_2 = 4;
var COSTS_ACED_TIER_3 = 5;
var COSTS_ACED_TIER_4 = 6;
//# sourceMappingURL=skill-tree.config.js.map