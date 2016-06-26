import { Injectable } from '@angular/core';

import { SkillProvider, SkillModel } from '../../../skill';

@Injectable()
export class CombatMedicSkillProvider implements SkillProvider {

    getSkill(): SkillModel {
        return COMBAT_MEDIC;
    }

}

const COMBAT_MEDIC = new SkillModel(

    "Combat Medic",

    "You gain 30% damage reduction for 5 seconds both after and during reviving another player.",
    "Reviving a crew member gives them 30% more health.",

    "ImageEmpty",
    "ImageBasic",
    "ImageAced",

    [],
    []
);