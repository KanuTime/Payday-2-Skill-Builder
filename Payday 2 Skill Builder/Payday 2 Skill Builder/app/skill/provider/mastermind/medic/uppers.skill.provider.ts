import { Injectable } from '@angular/core';

import { SkillProvider, SkillModel } from '../../../skill';

@Injectable()
export class UppersSkillProvider implements SkillProvider {

    getSkill(): SkillModel {
        return UPPERS;
    }

}

const UPPERS = new SkillModel(

    "Uppers",

    "Adds 7 more first aid kits to your inventory.",
    "Adds 3 more first aid kits to your inventory. Your deployed first aid kits will be automatically used "
        + "if a player would go down within a 5 meter radius of the first aid kit.",

    "ImageEmpty",
    "ImageBasic",
    "ImageAced",

    [],
    []
);