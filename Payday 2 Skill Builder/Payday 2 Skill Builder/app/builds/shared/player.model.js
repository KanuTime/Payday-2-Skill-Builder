"use strict";
var Player = (function () {
    function Player(armor) {
        this.armor = armor;
    }
    Player.prototype.allEffects = function () {
        return this.armor.allEffects();
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.model.js.map