import { SkillClassModel } from '../skill-class';

export class SkillBuildModel {

    constructor(

        public mastermind: SkillClassModel,
        public enforcer: SkillClassModel,
        public technician: SkillClassModel,
        public ghost: SkillClassModel,
        public fugitive: SkillClassModel

    ) { Object.freeze(this); }

}