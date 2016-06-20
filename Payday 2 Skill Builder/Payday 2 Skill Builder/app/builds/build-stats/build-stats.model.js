"use strict";
var BuildStat = (function () {
    function BuildStat(_name, _totalValue, _baseValue, _skillValue) {
        this._name = _name;
        this._totalValue = _totalValue;
        this._baseValue = _baseValue;
        this._skillValue = _skillValue;
    }
    Object.defineProperty(BuildStat.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildStat.prototype, "total", {
        get: function () { return this._totalValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildStat.prototype, "base", {
        get: function () { return this._baseValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BuildStat.prototype, "skill", {
        get: function () { return this._skillValue; },
        enumerable: true,
        configurable: true
    });
    return BuildStat;
}());
exports.BuildStat = BuildStat;
//# sourceMappingURL=build-stats.model.js.map