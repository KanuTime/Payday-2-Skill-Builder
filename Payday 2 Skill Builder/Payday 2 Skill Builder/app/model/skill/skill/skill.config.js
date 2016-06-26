"use strict";
var SkillState;
(function (SkillState) {
    SkillState[SkillState["EMPTY"] = 0] = "EMPTY";
    SkillState[SkillState["BASIC"] = 1] = "BASIC";
    SkillState[SkillState["ACED"] = 2] = "ACED";
})(SkillState || (SkillState = {}));
var SkillConfig = (function () {
    function SkillConfig(model, costsBasic, costsAced) {
        this.model = model;
        this.costsBasic = costsBasic;
        this.costsAced = costsAced;
        this.state = SkillState.EMPTY;
    }
    Object.defineProperty(SkillConfig.prototype, "name", {
        get: function () {
            return this.model.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "description", {
        get: function () {
            switch (this.state) {
                case SkillState.ACED: return this.model.descriptionAced;
                case SkillState.BASIC: return this.model.descriptionBasic;
                default: throw "SkillConfig: Tried to get description of an empty skill!";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "image", {
        get: function () {
            return this.model.imageEmpty; // TODO multiple possible images (empy, basic, aced)
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "effects", {
        get: function () {
            switch (this.state) {
                case SkillState.ACED: return this.model.effectsAced;
                case SkillState.BASIC: return this.model.effectsBasic;
                default: return [];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "costsToRaise", {
        get: function () {
            switch (this.state) {
                case SkillState.EMPTY: return this.costsBasic;
                case SkillState.BASIC: return this.costsAced;
                default: return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    SkillConfig.prototype.maybeRaise = function (skillPoints) {
        if (this.state != SkillState.ACED
            && skillPoints.canBuySkill(this.costsToRaise)) {
            skillPoints.buySkill(this.costsToRaise);
            this.raise();
            return true;
        }
        return false;
    };
    SkillConfig.prototype.raise = function () {
        switch (this.state) {
            case SkillState.EMPTY:
                this.state = SkillState.BASIC;
                break;
            case SkillState.BASIC:
                this.state = SkillState.ACED;
                break;
            default: throw "SkillConfig: Tried to raise already aced skill!";
        }
    };
    SkillConfig.prototype.maybeLower = function (skillPoints) {
        if (this.state != SkillState.EMPTY) {
            this.lower();
            skillPoints.sellSkill(this.costsToRaise);
            return true;
        }
        return false;
    };
    SkillConfig.prototype.lower = function () {
        switch (this.state) {
            case SkillState.ACED:
                this.state = SkillState.BASIC;
                break;
            case SkillState.BASIC:
                this.state = SkillState.EMPTY;
                break;
            default: throw "SkillConfig: Tried to lower already empty skill!";
        }
    };
    return SkillConfig;
}());
exports.SkillConfig = SkillConfig;
//# sourceMappingURL=skill.config.js.map