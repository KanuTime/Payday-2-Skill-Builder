import { Injectable } from '@angular/core';

import { SkillProvider, SkillModel } from '../../../skill';

@Injectable()
export class QuickFixSkillProvider implements SkillProvider {

    getSkill(): SkillModel {
        return QUICK_FIX;
    }

}

const QUICK_FIX = new SkillModel(

    "Quick Fix",

    "Decreases your first aid kit and doctor bag deploy time by 50%.",
    "Crew members that use your first aid kits or doctor bags take 15% less damage for 120 seconds.",

    "ImageEmpty",
    "ImageBasic",
    "ImageAced",

    [],
    []
);