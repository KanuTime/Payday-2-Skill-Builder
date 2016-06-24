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
var build_model_1 = require('./build.model');
var armor_parser_1 = require('./parser/armor.parser');
var BuildProvider = (function () {
    function BuildProvider(armorParser) {
        this.armorParser = armorParser;
    }
    BuildProvider.prototype.updateUrl = function (build) {
        history.pushState({}, "", "/" + this.toUrl(build));
    };
    BuildProvider.prototype.toUrl = function (build) {
        var armor = ARMOR_TOKEN + "=" + this.armorParser.toToken(build.armor);
        // ... 
        return "?" + armor;
    };
    BuildProvider.prototype.fromUrl = function () {
        var armor = this.armorParser.fromToken(this.extractValueOfToken(ARMOR_TOKEN));
        // ...
        return new build_model_1.Build(armor, null, this);
    };
    BuildProvider.prototype.extractValueOfToken = function (token) {
        return decodeURIComponent((new RegExp('[?|&]' + token + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)
            || [null, ''])[1].replace(/\+/g, '%20')) || null;
    };
    BuildProvider = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [armor_parser_1.ArmorParser])
    ], BuildProvider);
    return BuildProvider;
}());
exports.BuildProvider = BuildProvider;
var ARMOR_TOKEN = "armor";
//# sourceMappingURL=build.provider.js.map