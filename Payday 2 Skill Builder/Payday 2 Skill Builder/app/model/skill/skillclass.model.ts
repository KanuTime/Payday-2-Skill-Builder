import { Skill, SkillTree } from './index';

// Immutable
export class SkillClass {

    constructor(

        public name: string,

        public left: SkillTree,
        public middle: SkillTree,
        public right: SkillTree

    ) { Object.freeze(this); }

    getSkills(): Skill[] {
        return this.left.getSkills()
            .concat(this.middle.getSkills())
            .concat(this.right.getSkills());
    }

}