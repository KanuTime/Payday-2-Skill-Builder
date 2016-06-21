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
var build_model_1 = require('../../build/shared/build.model');
var index_1 = require('../index');
var __1 = require('../..');
var SkillSelectionComponent = (function () {
    function SkillSelectionComponent() {
    }
    SkillSelectionComponent.prototype.ngOnInit = function () {
        this.skill = new index_1.Skill("Bla", [new __1.Effect(__1.PropertyProvider.ARMOR, 15, 50)], []);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', build_model_1.Build)
    ], SkillSelectionComponent.prototype, "build", void 0);
    SkillSelectionComponent = __decorate([
        core_1.Component({
            selector: 'skill-selection',
            templateUrl: 'skill-selection.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], SkillSelectionComponent);
    return SkillSelectionComponent;
}());
exports.SkillSelectionComponent = SkillSelectionComponent;
//# sourceMappingURL=skill-selection.component.js.map