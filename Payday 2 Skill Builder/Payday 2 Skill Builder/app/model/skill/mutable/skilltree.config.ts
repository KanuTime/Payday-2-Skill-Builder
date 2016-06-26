import { SkillModel, SkillState } from '../index';

// Mutable
export class SkillTreeConfig {
    
    constructor(
        private skills: Map<SkillModel, SkillState> 
    ) { }

    setState(skill: SkillModel, state: SkillState): void {
        this.skills.set(skill, state);
    }

    getState(skill: SkillModel) {
        return this.skills.get(skill);
    }

}