import { SkillModel, SkillClass } from './index';

// Immutable
export class SkillSet {

    constructor(

        public mastermind: SkillClass,
        public enforcer: SkillClass,
        public technician: SkillClass,
        public ghost: SkillClass,
        public fugitive: SkillClass

    ) { }

    getSkillClasses(): SkillClass[] {
        return [
            this.mastermind,
            this.enforcer,
            this.technician,
            this.ghost,
            this.fugitive
        ];
    }

    getSkills(): SkillModel[] {
        return this.mastermind.getSkills()
            .concat(this.enforcer.getSkills())
            .concat(this.technician.getSkills())
            .concat(this.ghost.getSkills())
            .concat(this.fugitive.getSkills());
    }

}