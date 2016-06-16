"use strict";
var Effect = (function () {
    function Effect(_property, _percental, _absolute) {
        this._property = _property;
        this._percental = _percental;
        this._absolute = _absolute;
    }
    Object.defineProperty(Effect.prototype, "property", {
        get: function () { return this._property; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Effect.prototype, "percental", {
        get: function () { return this._percental; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Effect.prototype, "absolute", {
        get: function () { return this._absolute; },
        enumerable: true,
        configurable: true
    });
    Effect.prototype.plus = function (effect) {
        return new Effect(this.property, this.percental + effect.percental, this.absolute + effect.absolute);
    };
    return Effect;
}());
exports.Effect = Effect;
//# sourceMappingURL=effect.model.js.map