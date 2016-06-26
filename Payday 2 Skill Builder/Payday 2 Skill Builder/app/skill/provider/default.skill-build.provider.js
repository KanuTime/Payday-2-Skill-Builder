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
var skill_build_1 = require('../skill-build');
var index_1 = require('./index');
var DefaultSkillBuildProvider = (function () {
    function DefaultSkillBuildProvider(Mastermind // TODO add more
        ) {
        this.SKILL_BUILD = new skill_build_1.SkillBuildModel(Mastermind.getSkillClass(), Mastermind.getSkillClass(), // TODO add more
        Mastermind.getSkillClass(), Mastermind.getSkillClass(), Mastermind.getSkillClass());
    }
    DefaultSkillBuildProvider.prototype.getSkillBuild = function () {
        return this.SKILL_BUILD;
    };
    DefaultSkillBuildProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [index_1.MastermindSkillClassProvider])
    ], DefaultSkillBuildProvider);
    return DefaultSkillBuildProvider;
}());
exports.DefaultSkillBuildProvider = DefaultSkillBuildProvider;
//# sourceMappingURL=default.skill-build.provider.js.map