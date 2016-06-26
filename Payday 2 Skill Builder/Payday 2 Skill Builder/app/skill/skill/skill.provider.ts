import { SkillModel } from './index';

export interface SkillProvider {

    getSkill(): SkillModel;

}