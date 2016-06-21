"use strict";
var Skill = (function () {
    function Skill(_name, _effectsBasic, _effectsAced) {
        this._name = _name;
        this._effectsBasic = _effectsBasic;
        this._effectsAced = _effectsAced;
    }
    Object.defineProperty(Skill.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "effectsBasic", {
        get: function () { return this._effectsBasic; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Skill.prototype, "effectsAced", {
        get: function () { return this._effectsAced; },
        enumerable: true,
        configurable: true
    });
    return Skill;
}());
exports.Skill = Skill;
//# sourceMappingURL=skill.model.js.map