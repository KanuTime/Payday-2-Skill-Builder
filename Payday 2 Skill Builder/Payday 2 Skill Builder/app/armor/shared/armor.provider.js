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
var armor_model_1 = require('./armor.model');
var ArmorProvider = (function () {
    function ArmorProvider() {
    }
    ArmorProvider.prototype.get = function () { return ARMORS; };
    ArmorProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ArmorProvider);
    return ArmorProvider;
}());
exports.ArmorProvider = ArmorProvider;
var TWO_PIECE_SUIT = new armor_model_1.Armor("Two-piece Suit", 20, 30, 37, 10, 11, 21, 230, 3);
var LIGHTWEIGHT_BALLISTIC_VEST = new armor_model_1.Armor("Lightweight Ballistic Vest", 30, 26, 36, -20, 11, 20, 230, 3);
var BALLISTIC_VEST = new armor_model_1.Armor("Ballistic Vest", 40, 23, 35, -25, 12, 19, 230, 3);
var HEAVY_BALLISTIC_VEST = new armor_model_1.Armor("Heavy Ballistic Vest", 50, 21, 33, -30, 13, 18, 230, 3);
var FLAK_JACKET = new armor_model_1.Armor("Flak Jacket", 70, 18, 26, -35, 14, 17, 230, 3);
var COMBINED_TACTICAL_VEST = new armor_model_1.Armor("Combined Tactical Vest", 90, 12, 23, -40, 16, 16, 230, 3);
var IMPROVED_COMBINED_TACTICAL_VEST = new armor_model_1.Armor("Improved Combined Tactical Vest", 170, 1, 20, -50, 22, 14, 230, 3);
var ARMORS = [
    TWO_PIECE_SUIT,
    LIGHTWEIGHT_BALLISTIC_VEST,
    BALLISTIC_VEST,
    HEAVY_BALLISTIC_VEST,
    FLAK_JACKET,
    COMBINED_TACTICAL_VEST
];
//# sourceMappingURL=armor.provider.js.map