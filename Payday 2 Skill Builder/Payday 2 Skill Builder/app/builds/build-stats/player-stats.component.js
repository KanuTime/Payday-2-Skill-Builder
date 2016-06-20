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
var player_model_1 = require('../shared/player.model');
var effect_service_1 = require('../../effect/effect.service');
var property_provider_1 = require('../../effect/property.provider');
var PlayerStatsComponent = (function () {
    function PlayerStatsComponent() {
    }
    PlayerStatsComponent.prototype.ngOnInit = function () {
        var effectService = new effect_service_1.EffectService();
        var x = property_provider_1.PropertyProvider.ARMOR;
        var armorEffects = this.player.armor.allEffects();
        var playerEffects = this.player.allEffects();
        this.stats = [
            { name: "ARMOR", value: armorEffects.find(function (e) { return e.property == property_provider_1.PropertyProvider.ARMOR; }).absolute }
        ];
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', player_model_1.Player)
    ], PlayerStatsComponent.prototype, "player", void 0);
    PlayerStatsComponent = __decorate([
        core_1.Component({
            selector: 'player-stats',
            templateUrl: 'player-stats.component.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerStatsComponent);
    return PlayerStatsComponent;
}());
exports.PlayerStatsComponent = PlayerStatsComponent;
//# sourceMappingURL=player-stats.component.js.map