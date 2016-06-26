import { SkillTreeModel } from '../skill-tree';

export interface SkillTreeProvider {

    getSkillTree(): SkillTreeModel;

}