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
var build_model_1 = require('../shared/build.model');
var build_left_component_1 = require('../build-left/build-left.component');
var build_right_component_1 = require('../build-right/build-right.component');
var overlay_model_1 = require('../../shared/overlay.model');
var BuildConfigurationComponent = (function () {
    function BuildConfigurationComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', build_model_1.Build)
    ], BuildConfigurationComponent.prototype, "build", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', overlay_model_1.Overlay)
    ], BuildConfigurationComponent.prototype, "overlay", void 0);
    BuildConfigurationComponent = __decorate([
        core_1.Component({
            selector: 'build-configuration',
            templateUrl: 'build-configuration.component.html',
            styleUrls: ['build-configuration.css'],
            moduleId: module.id,
            directives: [build_left_component_1.BuildLeftComponent, build_right_component_1.BuildRightComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], BuildConfigurationComponent);
    return BuildConfigurationComponent;
}());
exports.BuildConfigurationComponent = BuildConfigurationComponent;
//# sourceMappingURL=build-configuration.component.js.map