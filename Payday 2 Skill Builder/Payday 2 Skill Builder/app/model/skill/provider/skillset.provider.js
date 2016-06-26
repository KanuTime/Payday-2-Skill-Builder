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
var index_1 = require('../index');
var mastermind_1 = require('./mastermind');
var SkillsetProvider = (function () {
    function SkillsetProvider(mastermindProvider) {
        this.instance = new index_1.SkillSet(mastermindProvider.getSkillClass(), mastermindProvider.getSkillClass(), // TODO
        mastermindProvider.getSkillClass(), // TODO
        mastermindProvider.getSkillClass(), // TODO
        mastermindProvider.getSkillClass() // TODO
        );
    }
    SkillsetProvider.prototype.getSkillSet = function () {
        return this.instance;
    };
    SkillsetProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof mastermind_1.MastermindProvider !== 'undefined' && mastermind_1.MastermindProvider) === 'function' && _a) || Object])
    ], SkillsetProvider);
    return SkillsetProvider;
    var _a;
}());
exports.SkillsetProvider = SkillsetProvider;
//# sourceMappingURL=skillset.provider.js.map