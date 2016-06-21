"use strict";
var index_1 = require('./index');
var PropertyProvider;
(function (PropertyProvider) {
    // Player stats
    PropertyProvider.ARMOR = new index_1.Property("Armor", "Armor is like a shield for you");
    PropertyProvider.CONCEALMENT = new index_1.Property("Concealment", "");
    PropertyProvider.SPEED = new index_1.Property("Speed", "");
    PropertyProvider.DODGE = new index_1.Property("Dodge", "");
    PropertyProvider.STEADINESS = new index_1.Property("Steadiness", "");
    PropertyProvider.STAMINA = new index_1.Property("Stamina", "");
    PropertyProvider.HEALTH = new index_1.Property("Health", "");
    PropertyProvider.ARMOR_RECOVERY = new index_1.Property("Armor Recovery", "", "s");
})(PropertyProvider = exports.PropertyProvider || (exports.PropertyProvider = {}));
//# sourceMappingURL=property.provider.js.map