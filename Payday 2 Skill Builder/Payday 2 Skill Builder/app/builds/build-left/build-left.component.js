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
var BuildLeftComponent = (function () {
    function BuildLeftComponent() {
        this.container = new Container(42);
    }
    BuildLeftComponent.prototype.doIt = function () {
        alert(this.container.value);
        this.container.value = 1;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', build_model_1.Build)
    ], BuildLeftComponent.prototype, "build", void 0);
    BuildLeftComponent = __decorate([
        core_1.Component({
            selector: 'build-left',
            templateUrl: 'build-left.component.html',
            styleUrls: ['build-left.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], BuildLeftComponent);
    return BuildLeftComponent;
}());
exports.BuildLeftComponent = BuildLeftComponent;
var Container = (function () {
    function Container(value) {
        this.value = value;
        Object.freeze(this);
    }
    return Container;
}());
//# sourceMappingURL=build-left.component.js.map