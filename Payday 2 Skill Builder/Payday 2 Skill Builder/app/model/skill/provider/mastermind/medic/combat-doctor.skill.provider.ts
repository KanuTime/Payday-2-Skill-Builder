import { Injectable } from '@angular/core';

import { SkillProvider, SkillModel } from '../../../skill';

@Injectable()
export class CombatDoctorSkillProvider implements SkillProvider {

    getSkill(): SkillModel {
        return COMBAT_DOCTOR;
    }

}

const COMBAT_DOCTOR = new SkillModel(

    "Combat Doctor",

    "You can now place 2 doctor bags instead of just one.",
    "Your doctor bags have 2 more charges.",

    "ImageEmpty",
    "ImageBasic",
    "ImageAced",

    [],
    []
);