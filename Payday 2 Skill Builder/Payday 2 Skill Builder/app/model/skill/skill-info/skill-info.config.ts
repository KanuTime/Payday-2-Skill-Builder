import { SkillConfig } from '../skill';

export class SkillInfoConfig {

    private skill: SkillConfig;

    set activeSkill(skill: SkillConfig) {
        this.skill = skill;
    }

}