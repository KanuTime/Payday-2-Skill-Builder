"use strict";
var Build = (function () {
    function Build(_armor, _skillset, buildProvider) {
        this._armor = _armor;
        this._skillset = _skillset;
        this.buildProvider = buildProvider;
    }
    Object.defineProperty(Build.prototype, "armor", {
        get: function () {
            return this._armor;
        },
        set: function (armor) {
            this._armor = armor;
            this.buildProvider.updateUrl(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Build.prototype, "skillset", {
        get: function () {
            return null;
        },
        set: function (skillset) {
            this._skillset = skillset;
            this.buildProvider.updateUrl(this);
        },
        enumerable: true,
        configurable: true
    });
    Build.prototype.effects = function () {
        return this.armor.effects(); //.concat(this.skillset.effects());
    };
    return Build;
}());
exports.Build = Build;
//# sourceMappingURL=build.model.js.map