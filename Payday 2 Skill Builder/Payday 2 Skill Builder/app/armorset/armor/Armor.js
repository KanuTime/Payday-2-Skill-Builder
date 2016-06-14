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
var lib_1 = require('engine/lib');
var Armor = (function () {
    function Armor(name /*,
        public armor: number,
        public concealment: number,
        public speed: number,
        public dodge: number,
        public steadiness: number,
        public stamina: number,
        public health: number,
        public armorRecovery: number*/) {
        this.name = name;
        this.hero = new lib_1.Mock();
    }
    Armor = __decorate([
        core_1.Component({
            selector: 'Armor',
            inputs: ['name'],
            moduleId: module.id,
            templateUrl: './Armor.component.html'
        }), 
        __metadata('design:paramtypes', [String])
    ], Armor);
    return Armor;
}());
exports.Armor = Armor;
//# sourceMappingURL=Armor.js.map