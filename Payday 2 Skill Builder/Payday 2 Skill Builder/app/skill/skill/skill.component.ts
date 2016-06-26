import { Component, Input } from '@angular/core';

import { SkillModel, SkillConfig } from './index';
import { SkillPointsConfig, SkillInfoConfig } from '../index';

@Component({
    selector: 'skill',
    templateUrl: 'skill.component.html'
})
export class SkillComponent {

    @Input('skill') skill: SkillConfig;
    @Input('info') skillInfo: SkillInfoConfig;

    constructor(
        private SkillPoints: SkillPointsConfig
    ) { }

    click(event: any): void {
        this.skill.maybeRaise(this.SkillPoints); // TODO or lower
    }

    mouseOver(event: any): void {
        this.skillInfo.activeSkill = this.skill;
    }

}