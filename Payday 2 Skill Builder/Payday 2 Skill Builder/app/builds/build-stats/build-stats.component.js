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
var build_stats_provider_1 = require('./build-stats.provider');
var BuildStatsComponent = (function () {
    function BuildStatsComponent(buildStatsProvider) {
        this.buildStatsProvider = buildStatsProvider;
    }
    Object.defineProperty(BuildStatsComponent.prototype, "stats", {
        get: function () {
            return this.buildStatsProvider.getBuildStats(this.build);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', build_model_1.Build)
    ], BuildStatsComponent.prototype, "build", void 0);
    BuildStatsComponent = __decorate([
        core_1.Component({
            selector: 'build-stats',
            templateUrl: 'build-stats.component.html',
            styleUrls: ['build-stats.component.css'],
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [build_stats_provider_1.BuildStatsProvider])
    ], BuildStatsComponent);
    return BuildStatsComponent;
}());
exports.BuildStatsComponent = BuildStatsComponent;
//# sourceMappingURL=build-stats.component.js.map