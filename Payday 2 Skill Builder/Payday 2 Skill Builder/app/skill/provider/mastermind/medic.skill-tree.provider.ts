import { Injectable } from '@angular/core';

import { SkillTreeModel, SkillTreeProvider } from '../../skill-tree';
import {
    CombatMedicSkillProvider,
    QuickFixSkillProvider,
    PainkillersSkillProvider,
    UppersSkillProvider,
    CombatDoctorSkillProvider,
    InspireSkillProvider
} from './medic';

@Injectable()
export class MedicSkillTreeProvider implements SkillTreeProvider {

    private SKILL_TREE: SkillTreeModel;

    constructor(
        CombatMedic: CombatMedicSkillProvider,
        QuickFix: QuickFixSkillProvider,
        Painkillers: PainkillersSkillProvider,
        Uppers: UppersSkillProvider,
        CombatDoctor: CombatDoctorSkillProvider,
        Inspire: InspireSkillProvider
    ) {
        this.SKILL_TREE = new SkillTreeModel("Medic",
            CombatMedic.getSkill(),
            QuickFix.getSkill(),
            Painkillers.getSkill(),
            Uppers.getSkill(),
            CombatDoctor.getSkill(),
            Inspire.getSkill()
        );
    }    

    getSkillTree(): SkillTreeModel {
        return this.SKILL_TREE;
    }

}