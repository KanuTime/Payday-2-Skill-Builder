"use strict";
var __1 = require('../..');
var Armor = (function () {
    function Armor(_name, _armor, _concealment, _speed, _dodge, _steadiness, _stamina, _health, _armorRecovery) {
        this._name = _name;
        this._armor = _armor;
        this._concealment = _concealment;
        this._speed = _speed;
        this._dodge = _dodge;
        this._steadiness = _steadiness;
        this._stamina = _stamina;
        this._health = _health;
        this._armorRecovery = _armorRecovery;
        Object.freeze(this);
    }
    Object.defineProperty(Armor.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "armor", {
        get: function () { return __1.PropertyProvider.ARMOR.absolute(this._armor); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "concealment", {
        get: function () { return __1.PropertyProvider.CONCEALMENT.absolute(this._concealment); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "speed", {
        get: function () { return __1.PropertyProvider.SPEED.absolute(this._speed); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "dodge", {
        get: function () { return __1.PropertyProvider.DODGE.absolute(this._dodge); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "steadiness", {
        get: function () { return __1.PropertyProvider.STEADINESS.absolute(this._steadiness); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "stamina", {
        get: function () { return __1.PropertyProvider.STAMINA.absolute(this._stamina); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "health", {
        get: function () { return __1.PropertyProvider.HEALTH.absolute(this._health); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "armorRecovery", {
        get: function () { return __1.PropertyProvider.ARMOR_RECOVERY.absolute(this._armorRecovery); },
        enumerable: true,
        configurable: true
    });
    Armor.prototype.effects = function () {
        return [
            this.armor,
            this.concealment,
            this.speed,
            this.dodge,
            this.steadiness,
            this.stamina,
            this.health,
            this.armorRecovery
        ];
    };
    return Armor;
}());
exports.Armor = Armor;
//# sourceMappingURL=armor.model.js.map