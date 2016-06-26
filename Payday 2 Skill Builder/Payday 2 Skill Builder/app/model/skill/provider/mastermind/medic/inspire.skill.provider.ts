import { Injectable } from '@angular/core';

import { SkillProvider, SkillModel } from '../../../skill';

@Injectable()
export class InspireSkillProvider implements SkillProvider {

    getSkill(): SkillModel {
        return INSPIRE;
    }

}

const INSPIRE = new SkillModel(

    "Inspire",

    "You revive crew members 50% faster. Shouting at your teammates will increase their movement speed by 20% for 30 seconds.",
    "There is a 100% chance that you can revive crew members at a distance by shouting at them. This cannot occur more "
        + "than once every 20 seconds.",

    "ImageEmpty",
    "ImageBasic",
    "ImageAced",

    [],
    []
);