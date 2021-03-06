"use strict";
// Immutable
var SkillTree = (function () {
    function SkillTree(name, tier_1, tier_2_l, tier_2_r, tier_3_l, tier_3_r, tier_4) {
        this.name = name;
        this.tier_1 = tier_1;
        this.tier_2_l = tier_2_l;
        this.tier_2_r = tier_2_r;
        this.tier_3_l = tier_3_l;
        this.tier_3_r = tier_3_r;
        this.tier_4 = tier_4;
        Object.freeze(this);
    }
    SkillTree.prototype.getSkills = function () {
        return [
            this.tier_1,
            this.tier_2_l,
            this.tier_2_r,
            this.tier_3_l,
            this.tier_3_r,
            this.tier_4
        ];
    };
    return SkillTree;
}());
exports.SkillTree = SkillTree;
//# sourceMappingURL=skilltree.model.js.map