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
var player_model_1 = require('./player.model');
var armor_provider_1 = require('../../armor/shared/armor.provider');
var PlayerProvider = (function () {
    function PlayerProvider() {
        this.armorProvider = new armor_provider_1.ArmorProvider();
    }
    PlayerProvider.prototype.getPlayerById = function (id) {
        return new player_model_1.Player(this.armorProvider.get()[0]);
    };
    PlayerProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlayerProvider);
    return PlayerProvider;
}());
exports.PlayerProvider = PlayerProvider;
//# sourceMappingURL=player.provider.js.map