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
var index_1 = require('./index');
var index_2 = require('../index');
var SkillClassComponent = (function () {
    function SkillClassComponent() {
    }
    __decorate([
        core_1.Input('skillClass'), 
        __metadata('design:type', index_1.SkillClassConfig)
    ], SkillClassComponent.prototype, "skillClass", void 0);
    __decorate([
        core_1.Input('info'), 
        __metadata('design:type', index_2.SkillInfoConfig)
    ], SkillClassComponent.prototype, "skillInfo", void 0);
    SkillClassComponent = __decorate([
        core_1.Component({
            selector: 'skill-class',
            templateUrl: 'skill-class.component.html',
            directives: [index_2.SkillTreeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], SkillClassComponent);
    return SkillClassComponent;
}());
exports.SkillClassComponent = SkillClassComponent;
//# sourceMappingURL=skill-class.component.js.map