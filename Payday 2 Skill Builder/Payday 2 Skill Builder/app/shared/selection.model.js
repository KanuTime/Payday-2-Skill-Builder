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
    function Selection(as, selectedSupplier) {
        this.selectedSupplier = selectedSupplier;
        this.selectionEvent = new core_1.EventEmitter();
        this.as = as;
    }
    Selection.prototype.ngOnInit = function () {
        this.select = this.selectedSupplier();
    };
    Selection.prototype.getSelected = function () {
        return this.select;
    };
    Selection.prototype.setSelected = function (selected) {
        this.select = selected;
        this.selectionEvent.emit({
            value: this.select
        });
    };
    Selection.prototype.elements = function () {
        return this.as;
    };
    __decorate([
        core_1.Output('selection'), 
        __metadata('design:type', Object)
    ], Selection.prototype, "selectionEvent", void 0);
    return Selection;
}());
exports.Selection = Selection;
//# sourceMappingURL=selection.model.js.map