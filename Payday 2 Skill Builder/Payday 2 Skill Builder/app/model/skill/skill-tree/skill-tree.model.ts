import { SkillModel } from '../skill';

export class SkillTreeModel {

    constructor(

        public name: string,

        public tier_1: SkillModel,
        public tier_2_l: SkillModel,
        public tier_2_r: SkillModel,
        public tier_3_l: SkillModel,
        public tier_3_r: SkillModel,
        public tier_4: SkillModel

    ) { Object.freeze(this); }

}