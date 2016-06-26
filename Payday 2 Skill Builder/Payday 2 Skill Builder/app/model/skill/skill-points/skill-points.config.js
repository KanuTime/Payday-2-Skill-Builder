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
var SkillPointsConfig = (function () {
    function SkillPointsConfig(startValue) {
        this.value = startValue ? startValue : MAX_VALUE;
    }
    SkillPointsConfig.prototype.getRemaining = function () {
        return this.value;
    };
    SkillPointsConfig.prototype.canBuySkill = function (costs) {
        return this.value - costs >= 0;
    };
    SkillPointsConfig.prototype.buySkill = function (costs) {
        this.value -= costs;
    };
    SkillPointsConfig.prototype.sellSkill = function (costs) {
        this.value = Math.min(this.value + costs, MAX_VALUE);
    };
    SkillPointsConfig = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Number])
    ], SkillPointsConfig);
    return SkillPointsConfig;
}());
exports.SkillPointsConfig = SkillPointsConfig;
var MAX_VALUE = 100;
//# sourceMappingURL=skill-points.config.js.map