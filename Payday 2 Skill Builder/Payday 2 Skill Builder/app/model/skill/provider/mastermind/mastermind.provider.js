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
var index_1 = require('../../index');
var index_2 = require('./index');
var MastermindProvider = (function () {
    function MastermindProvider(medic) {
        this.instance = new index_1.SkillClass("Mastermind", medic.getSkillTree(), medic.getSkillTree(), // TODO
        medic.getSkillTree() // TODO
        );
    }
    MastermindProvider.prototype.getSkillClass = function () {
        return this.instance;
    };
    MastermindProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof index_2.MastermindMedicProvider !== 'undefined' && index_2.MastermindMedicProvider) === 'function' && _a) || Object])
    ], MastermindProvider);
    return MastermindProvider;
    var _a;
}());
exports.MastermindProvider = MastermindProvider;
//# sourceMappingURL=mastermind.provider.js.map