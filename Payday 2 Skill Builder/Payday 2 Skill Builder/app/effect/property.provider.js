"use strict";
var property_model_1 = require('./property.model');
var PropertyProvider;
(function (PropertyProvider) {
    // Player stats
    PropertyProvider.ARMOR = new property_model_1.Property("Armor", "Armor is like a shield for you");
    PropertyProvider.CONCEALMENT = new property_model_1.Property("Concealment", "");
    PropertyProvider.SPEED = new property_model_1.Property("Speed", "");
    PropertyProvider.DODGE = new property_model_1.Property("Dodge", "");
    PropertyProvider.STEADINESS = new property_model_1.Property("Steadiness", "");
    PropertyProvider.STAMINA = new property_model_1.Property("Stamina", "");
    PropertyProvider.HEALTH = new property_model_1.Property("Health", "");
    PropertyProvider.ARMOR_RECOVERY = new property_model_1.Property("Armor Recovery", "", "s");
})(PropertyProvider = exports.PropertyProvider || (exports.PropertyProvider = {}));
//# sourceMappingURL=property.provider.js.map