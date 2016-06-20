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
var armor_provider_1 = require('../../../armor/shared/armor.provider');
var ArmorParser = (function () {
    function ArmorParser(armorProvider) {
        this.armors = armorProvider.getArmors();
    }
    ArmorParser.prototype.fromToken = function (armor) {
        var index = armor === null ? 0 : parseInt(armor);
        return this.armors[index >= 0 && index < this.armors.length ? index : 0];
    };
    ArmorParser.prototype.toToken = function (armor) {
        return "" + this.armors.indexOf(armor);
    };
    ArmorParser = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [armor_provider_1.ArmorProvider])
    ], ArmorParser);
    return ArmorParser;
}());
exports.ArmorParser = ArmorParser;
//# sourceMappingURL=armor.parser.js.map