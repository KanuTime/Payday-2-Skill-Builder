import { SkillModel, SkillTree } from './index';

// Immutable
export class SkillClass {

    constructor(

        public name: string,

        public left: SkillTree,
        public middle: SkillTree,
        public right: SkillTree

    ) { Object.freeze(this); }

    getSkills(): SkillModel[] {
        return this.left.getSkills()
            .concat(this.middle.getSkills())
            .concat(this.right.getSkills());
    }

}