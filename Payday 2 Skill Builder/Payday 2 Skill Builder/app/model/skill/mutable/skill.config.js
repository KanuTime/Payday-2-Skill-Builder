"use strict";
var index_1 = require('../index');
var SkillConfig = (function () {
    function SkillConfig(skill, skillpoints, startState) {
        this.skill = skill;
        this.skillpoints = skillpoints;
        this.state = startState ? startState : index_1.SkillState.EMPTY;
    }
    SkillConfig.prototype.getSkill = function () {
        return this.skill;
    };
    SkillConfig.prototype.getState = function () {
        return this.state;
    };
    SkillConfig.prototype.raise = function () {
        switch (this.state) {
        }
    };
    return SkillConfig;
}());
exports.SkillConfig = SkillConfig;
//# sourceMappingURL=skill.config.js.map