import { Injectable } from '@angular/core';

import { SkillProvider, SkillModel } from '../../../skill';

@Injectable()
export class PainkillersSkillProvider implements SkillProvider {

    getSkill(): SkillModel {
        return PAINKILLERS;
    }

}

const PAINKILLERS = new SkillModel(

    "Painkillers",

    "Crew members you revive take 30% less damage for 5 seconds.",
    "The damage reduction is increased by an additional 50%.",

    "ImageEmpty",
    "ImageBasic",
    "ImageAced",

    [],
    []
);