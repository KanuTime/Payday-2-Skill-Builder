"use strict";
var Selection = (function () {
    function Selection(as, select) {
        this.as = as;
        this.select = select ? select : as[0];
    }
    Object.defineProperty(Selection.prototype, "selected", {
        get: function () {
            return this.select;
        },
        set: function (selected) {
            this.select = selected;
            this.onChange(selected);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Selection.prototype, "elements", {
        get: function () {
            return this.as;
        },
        enumerable: true,
        configurable: true
    });
    Selection.prototype.writeValue = function (value) {
        this.select = value;
    };
    Selection.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    Selection.prototype.registerOnTouched = function (fn) {
        // you can't touch this
    };
    return Selection;
}());
exports.Selection = Selection;
//# sourceMappingURL=selection.model.js.map