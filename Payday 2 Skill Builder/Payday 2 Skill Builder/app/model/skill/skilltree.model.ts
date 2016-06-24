import { Skill } from './index';

// Immutable
export class SkillTree {

    constructor(

        public name: string,

        public tier_1: Skill,
        public tier_2_l: Skill,
        public tier_2_r: Skill,
        public tier_3_l: Skill,
        public tier_3_r: Skill,
        public tier_4: Skill

    ) { Object.freeze(this); }

    getSkills(): Skill[] {
        return [
            this.tier_1,
            this.tier_2_l,
            this.tier_2_r,
            this.tier_3_l,
            this.tier_3_r,
            this.tier_4
        ];
    }

}