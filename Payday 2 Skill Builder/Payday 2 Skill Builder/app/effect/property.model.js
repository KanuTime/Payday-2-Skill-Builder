"use strict";
var index_1 = require('./index');
var Property = (function () {
    function Property(_name, _description, _unit) {
        this._name = _name;
        this._description = _description;
        this._unit = _unit;
    }
    Object.defineProperty(Property.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "description", {
        get: function () { return this._description; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Property.prototype, "unit", {
        get: function () { return this._unit ? this._unit : ""; },
        enumerable: true,
        configurable: true
    });
    Property.prototype.absolute = function (value) {
        return new index_1.Effect(this, 0, value);
    };
    Property.prototype.percental = function (value) {
        return new index_1.Effect(this, value, 0);
    };
    return Property;
}());
exports.Property = Property;
//# sourceMappingURL=property.model.js.map