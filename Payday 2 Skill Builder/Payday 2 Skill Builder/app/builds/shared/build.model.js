"use strict";
var Build = (function () {
    function Build(_armor, buildProvider) {
        this._armor = _armor;
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
    Build.prototype.effects = function () {
        return this.armor.effects();
    };
    return Build;
}());
exports.Build = Build;
//# sourceMappingURL=build.model.js.map