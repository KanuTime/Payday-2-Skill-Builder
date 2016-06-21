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
var property_provider_1 = require('../../effect/property.provider');
var build_stat_model_1 = require('./build-stat.model');
var BuildStatsProvider = (function () {
    function BuildStatsProvider() {
    }
    BuildStatsProvider.prototype.getBuildStats = function (build) {
        var _this = this;
        return PROPERTIES.map(function (property) {
            var totalValue = _this.selectEffect(property, build.effects()).absolute;
            var baseValue = _this.selectEffect(property, build.armor.effects()).absolute;
            return new build_stat_model_1.BuildStat(property.name, totalValue, baseValue, totalValue - baseValue);
        });
    };
    BuildStatsProvider.prototype.selectEffect = function (property, effects) {
        return effects.find(function (e) { return e.property == property; });
    };
    BuildStatsProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], BuildStatsProvider);
    return BuildStatsProvider;
}());
exports.BuildStatsProvider = BuildStatsProvider;
var PROPERTIES = [
    property_provider_1.PropertyProvider.ARMOR,
    property_provider_1.PropertyProvider.HEALTH,
    property_provider_1.PropertyProvider.CONCEALMENT,
    property_provider_1.PropertyProvider.SPEED,
    property_provider_1.PropertyProvider.DODGE,
    property_provider_1.PropertyProvider.STEADINESS,
    property_provider_1.PropertyProvider.STAMINA
];
//# sourceMappingURL=build-stats.provider.js.map