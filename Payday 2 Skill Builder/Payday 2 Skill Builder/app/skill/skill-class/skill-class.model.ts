import { SkillTreeModel } from '../skill-tree';

export class SkillClassModel {

    constructor(

        public name: string,

        public left:   SkillTreeModel,
        public middle: SkillTreeModel,
        public right:  SkillTreeModel

    ) { Object.freeze(this); }

}