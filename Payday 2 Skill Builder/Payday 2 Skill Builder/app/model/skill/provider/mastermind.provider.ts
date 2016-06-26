import { Injectable } from '@angular/core';

import { SkillTree, SkillClass } from '../../index';
import { MastermindMedicProvider } from './index';

@Injectable()
export class MastermindProvider {

    private instance: SkillClass;

    constructor(
        medic: MastermindMedicProvider
    ) {
        this.instance = new SkillClass("Mastermind",
            medic.getSkillTree(),
            medic.getSkillTree(), // TODO
            medic.getSkillTree()  // TODO
        );
    }

    getSkillClass(): SkillClass {
        return this.instance;
    }

}