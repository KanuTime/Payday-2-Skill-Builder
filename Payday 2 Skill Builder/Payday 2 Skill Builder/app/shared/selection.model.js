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
var Selection = (function () {
    function Selection(as) {
        this.as = as;
        this.selection = new core_1.EventEmitter();
    }
    Selection.prototype.ngOnInit = function () {
        this._selected = this.initiallySelected;
        this.initiallySelected = undefined;
    };
    Selection.prototype.selected = function () {
        return this._selected;
    };
    Selection.prototype.select = function (selected) {
        this._selected = selected;
        this.selection.emit(this._selected);
    };
    Selection.prototype.elements = function () {
        return this.as;
    };
    __decorate([
        core_1.Input('selected'), 
        __metadata('design:type', Object)
    ], Selection.prototype, "initiallySelected", void 0);
    __decorate([
        core_1.Output('selection'), 
        __metadata('design:type', Object)
    ], Selection.prototype, "selection", void 0);
    return Selection;
}());
exports.Selection = Selection;
//# sourceMappingURL=selection.model.js.map