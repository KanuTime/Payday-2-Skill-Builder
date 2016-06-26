import { Injectable } from '@angular/core';

import { SkillBuildModel, SkillBuildProvider } from '../skill-build';
import {
    MastermindSkillClassProvider // TODO add more
} from './index';

@Injectable()
export class DefaultSkillBuildProvider implements SkillBuildProvider {

    private SKILL_BUILD: SkillBuildModel;

    constructor(
        Mastermind: MastermindSkillClassProvider // TODO add more
    ) {
        this.SKILL_BUILD = new SkillBuildModel(
            Mastermind.getSkillClass(),
            Mastermind.getSkillClass(), // TODO add more
            Mastermind.getSkillClass(),
            Mastermind.getSkillClass(),
            Mastermind.getSkillClass()
        );
    }

    getSkillBuild(): SkillBuildModel {
        return this.SKILL_BUILD;
    }

}