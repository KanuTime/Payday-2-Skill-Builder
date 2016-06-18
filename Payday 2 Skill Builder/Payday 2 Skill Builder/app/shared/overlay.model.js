"use strict";
var Overlay = (function () {
    function Overlay() {
        this._state = OverlayState.EMPTY;
    }
    Object.defineProperty(Overlay.prototype, "showOverlay", {
        get: function () { return this._state != OverlayState.EMPTY; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Overlay.prototype, "showArmor", {
        get: function () { return this._state === OverlayState.ARMOR; },
        enumerable: true,
        configurable: true
    });
    Overlay.prototype.setEmpty = function () { this._state = OverlayState.EMPTY; };
    Overlay.prototype.setArmor = function () { this._state = OverlayState.ARMOR; };
    return Overlay;
}());
exports.Overlay = Overlay;
var OverlayState;
(function (OverlayState) {
    OverlayState[OverlayState["EMPTY"] = 0] = "EMPTY";
    OverlayState[OverlayState["ARMOR"] = 1] = "ARMOR";
})(OverlayState || (OverlayState = {}));
//# sourceMappingURL=overlay.model.js.map