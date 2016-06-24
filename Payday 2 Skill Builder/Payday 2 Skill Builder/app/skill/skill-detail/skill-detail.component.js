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
var skill_model_1 = require('../../model/skill/skill.model');
var SkillDetailComponent = (function () {
    function SkillDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', skill_model_1.Skill)
    ], SkillDetailComponent.prototype, "skill", void 0);
    SkillDetailComponent = __decorate([
        core_1.Component({
            selector: 'skill-detail',
            templateUrl: 'skill-detail.component.html',
            styleUrls: ['skill-detail.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], SkillDetailComponent);
    return SkillDetailComponent;
}());
exports.SkillDetailComponent = SkillDetailComponent;
//# sourceMappingURL=skill-detail.component.js.map