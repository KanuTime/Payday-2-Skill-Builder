"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var armor_model_1 = require('../shared/armor.model');
var selection_model_1 = require('../../shared/selection.model');
var armor_provider_1 = require('../shared/armor.provider');
var ArmorSelectionComponent = (function (_super) {
    __extends(ArmorSelectionComponent, _super);
    function ArmorSelectionComponent(armorProvider) {
        var _this = this;
        _super.call(this, armorProvider.get(), function () { return _this.armor; });
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', armor_model_1.Armor)
    ], ArmorSelectionComponent.prototype, "armor", void 0);
    ArmorSelectionComponent = __decorate([
        core_1.Component({
            selector: 'armor-selection',
            templateUrl: 'armor-selection.component.html',
            moduleId: module.id,
            providers: [armor_provider_1.ArmorProvider]
        }), 
        __metadata('design:paramtypes', [armor_provider_1.ArmorProvider])
    ], ArmorSelectionComponent);
    return ArmorSelectionComponent;
}(selection_model_1.Selection));
exports.ArmorSelectionComponent = ArmorSelectionComponent;
//# sourceMappingURL=armor-selection.component.js.map