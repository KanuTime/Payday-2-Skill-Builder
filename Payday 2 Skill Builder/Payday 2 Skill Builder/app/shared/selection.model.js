//import { ControlValueAccessor } from '@angular/common';
"use strict";
var Selection = (function () {
    function Selection() {
    }
    //private onChange: (A) => void;
    /* constructor(elements: A[], selected?: A) {
         this.as = elements;
         this.select = selected;
     }*/
    Selection.prototype.setElements = function (elements) {
        this.as = elements;
    };
    Selection.prototype.getSelected = function () {
        return this.select;
    };
    Selection.prototype.setSelected = function (selected) {
        this.select = selected;
        //this.onChange(selected);
    };
    Selection.prototype.elements = function () {
        return this.as;
    };
    return Selection;
}());
exports.Selection = Selection;
//# sourceMappingURL=selection.model.js.map