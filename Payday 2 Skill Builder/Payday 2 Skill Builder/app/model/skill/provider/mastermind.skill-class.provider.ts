import { Injectable } from '@angular/core';

import { SkillClassModel, SkillClassProvider } from '../skill-class';
import {
    MedicSkillTreeProvider // TODO add more
} from './mastermind';

@Injectable()
export class MastermindSkillClassProvider implements SkillClassProvider {

    private SKILL_CLASS: SkillClassModel;

    constructor(
        Medic: MedicSkillTreeProvider // TODO add more
    ) {
        this.SKILL_CLASS = new SkillClassModel("Mastermind",
            Medic.getSkillTree(),
            Medic.getSkillTree(), // TODO add more
            Medic.getSkillTree()
        );
    }

    getSkillClass(): SkillClassModel {
        return this.SKILL_CLASS;
    }

}