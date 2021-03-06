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
var armor_selection_component_1 = require('../../armor/armor-selection/armor-selection.component');
var PlayerBuildComponent = (function () {
    function PlayerBuildComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', player_model_1.Player)
    ], PlayerBuildComponent.prototype, "player", void 0);
    PlayerBuildComponent = __decorate([
        core_1.Component({
            selector: 'player-build',
            templateUrl: 'player-build.component.html',
            moduleId: module.id,
            directives: [armor_selection_component_1.ArmorSelectionComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], PlayerBuildComponent);
    return PlayerBuildComponent;
}());
exports.PlayerBuildComponent = PlayerBuildComponent;
//# sourceMappingURL=player-build.component.js.map