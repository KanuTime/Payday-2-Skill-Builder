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
var index_1 = require('../index');
var ArmorProvider = (function () {
    function ArmorProvider() {
        this.ALL = [
            Armors.TWO_PIECE_SUIT,
            Armors.LIGHTWEIGHT_BALLISTIC_VEST,
            Armors.BALLISTIC_VEST,
            Armors.HEAVY_BALLISTIC_VEST,
            Armors.FLAK_JACKET,
            Armors.COMBINED_TACTICAL_VEST
        ];
    }
    Object.defineProperty(ArmorProvider.prototype, "armors", {
        get: function () { return this.ALL; },
        enumerable: true,
        configurable: true
    });
    ArmorProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ArmorProvider);
    return ArmorProvider;
}());
exports.ArmorProvider = ArmorProvider;
var Armors;
(function (Armors) {
    Armors.TWO_PIECE_SUIT = new index_1.Armor("Two-piece Suit", 20, 30, 37, 10, 11, 21, 230, 3);
    Armors.LIGHTWEIGHT_BALLISTIC_VEST = new index_1.Armor("Lightweight Ballistic Vest", 30, 26, 36, -20, 11, 20, 230, 3);
    Armors.BALLISTIC_VEST = new index_1.Armor("Ballistic Vest", 40, 23, 35, -25, 12, 19, 230, 3);
    Armors.HEAVY_BALLISTIC_VEST = new index_1.Armor("Heavy Ballistic Vest", 50, 21, 33, -30, 13, 18, 230, 3);
    Armors.FLAK_JACKET = new index_1.Armor("Flak Jacket", 70, 18, 26, -35, 14, 17, 230, 3);
    Armors.COMBINED_TACTICAL_VEST = new index_1.Armor("Combined Tactical Vest", 90, 12, 23, -40, 16, 16, 230, 3);
    Armors.IMPROVED_COMBINED_TACTICAL_VEST = new index_1.Armor("Improved Combined Tactical Vest", 170, 1, 20, -50, 22, 14, 230, 3);
})(Armors = exports.Armors || (exports.Armors = {}));
//# sourceMappingURL=armor.provider.js.map