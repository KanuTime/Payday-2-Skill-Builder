import { Skill, SkillState } from './index';

// Mutable
export class SkillConfig {
    
    constructor(
        private skills: Map<Skill, SkillState> 
    ) { }

    setState(skill: Skill, state: SkillState): void {
        this.skills.set(skill, state);
    }

    getState(skill: Skill) {
        return this.skills.get(skill);
    }

}