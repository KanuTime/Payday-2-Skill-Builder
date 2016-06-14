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
var Armor_1 = require('./armor/Armor');
var Armor_service_1 = require('./armor/Armor.service');
var ArmorSet_1 = require('./ArmorSet');
var ArmorSetComponent = (function () {
    function ArmorSetComponent(armorService) {
        this.armorService = armorService;
        this.armorSet = new ArmorSet_1.ArmorSet(armorService.getArmors());
    }
    ArmorSetComponent = __decorate([
        core_1.Component({
            selector: 'ArmorSet',
            inputs: ['armors'],
            moduleId: module.id,
            templateUrl: 'ArmorSet.component.html',
            directives: [Armor_1.Armor],
            providers: [Armor_service_1.ArmorService]
        }), 
        __metadata('design:paramtypes', [Armor_service_1.ArmorService])
    ], ArmorSetComponent);
    return ArmorSetComponent;
}());
exports.ArmorSetComponent = ArmorSetComponent;
//# sourceMappingURL=ArmorSet.component.js.map