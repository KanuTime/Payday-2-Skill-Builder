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
var EffectService = (function () {
    function EffectService() {
    }
    EffectService.prototype.evaluate = function (efficacious) {
        return this.reduceValues(this.combineEffects(efficacious.effects()));
    };
    EffectService.prototype.combineEffects = function (effects) {
        var map = {};
        for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
            var effect = effects_1[_i];
            if (effect.property.name in map) {
                map[effect.property.name] = effect.plus(map[effect.property.name]);
            }
            else {
                map[effect.property.name] = effect;
            }
        }
        return map;
    };
    EffectService.prototype.reduceValues = function (effectMap) {
        var valueMap = {};
        for (var property in effectMap) {
            var effect = effectMap[property];
            var value = effect.absolute * (100 + effect.percental) / 100;
            valueMap[effect.property.name] = value;
        }
        return valueMap;
    };
    EffectService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EffectService);
    return EffectService;
}());
exports.EffectService = EffectService;
//# sourceMappingURL=effect.service.js.map