"use strict";
var SkillPoints = (function () {
    function SkillPoints(startValue) {
        this.value = startValue ? startValue : MAX_VALUE;
    }
    SkillPoints.prototype.getRemaining = function () {
        return this.value;
    };
    SkillPoints.prototype.canBuySkill = function (costs) {
        return this.value - costs >= 0;
    };
    SkillPoints.prototype.buySkill = function (costs) {
        this.value -= costs;
    };
    SkillPoints.prototype.sellSkill = function (costs) {
        this.value = Math.min(this.value + costs, MAX_VALUE);
    };
    return SkillPoints;
}());
exports.SkillPoints = SkillPoints;
var MAX_VALUE = 100;
//# sourceMappingURL=skillpoints.config.js.map