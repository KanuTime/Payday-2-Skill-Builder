"use strict";
var effect_model_1 = require('../../effect/effect.model');
var property_model_1 = require('../../effect/property.model');
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
    }
    Object.defineProperty(Armor.prototype, "name", {
        get: function () { return this._name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "armor", {
        get: function () { return new effect_model_1.Effect(property_model_1.Property.ARMOR, 0, this._armor); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "concealment", {
        get: function () { return new effect_model_1.Effect(property_model_1.Property.CONCEALMENT, 0, this._concealment); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "speed", {
        get: function () { return new effect_model_1.Effect(property_model_1.Property.SPEED, 0, this._speed); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "dodge", {
        get: function () { return new effect_model_1.Effect(property_model_1.Property.DODGE, 0, this._dodge); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "steadiness", {
        get: function () { return new effect_model_1.Effect(property_model_1.Property.STEADINESS, 0, this._steadiness); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "stamina", {
        get: function () { return new effect_model_1.Effect(property_model_1.Property.STAMINA, 0, this._stamina); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "health", {
        get: function () { return new effect_model_1.Effect(property_model_1.Property.HEALTH, 0, this._health); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Armor.prototype, "armorRecovery", {
        get: function () { return new effect_model_1.Effect(property_model_1.Property.ARMOR_RECOVERY, 0, this._armorRecovery); },
        enumerable: true,
        configurable: true
    });
    Armor.prototype.allEffects = function () {
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