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
var armor_provider_1 = require('./armor/shared/armor.provider');
var armor_selection_component_1 = require('./armor/armor-selection/armor-selection.component');
var armor_detail_component_1 = require('./armor/armor-detail/armor-detail.component');
var effect_service_1 = require('./effect/effect.service');
var effect_model_1 = require('./effect/effect.model');
var property_provider_1 = require('./effect/property.provider');
var player_model_1 = require('./player/shared/player.model');
var player_stats_component_1 = require('./player/player-stats/player-stats.component');
var AppComponent = (function () {
    function AppComponent(armorProvider, effectService) {
        this.armorProvider = armorProvider;
        this.effectService = effectService;
        this.title = 'Payday 2 Skill Builder';
        this.skills = [new effect_model_1.Effect(property_provider_1.PropertyProvider.ARMOR, 50, 10)];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.player = this.createPlayer();
    };
    AppComponent.prototype.createPlayer = function () {
        return new player_model_1.Player(this.armorProvider.get()[0]);
    };
    AppComponent.prototype.setSelectedArmor = function (armor) {
        this.player.armor = armor;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [armor_selection_component_1.ArmorSelectionComponent, armor_detail_component_1.ArmorDetailComponent, player_stats_component_1.PlayerStatsComponent],
            providers: [armor_provider_1.ArmorProvider, effect_service_1.EffectService],
            moduleId: module.id,
        }), 
        __metadata('design:paramtypes', [armor_provider_1.ArmorProvider, effect_service_1.EffectService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map