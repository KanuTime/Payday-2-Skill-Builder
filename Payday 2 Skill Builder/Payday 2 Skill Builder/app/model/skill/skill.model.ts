import { Effect } from '../..';

// Immutable
export class Skill {

    constructor(

        public name: string,
        
        private basicDescription: string,
        private acedDescription: string,

        private image: string,

        private basicEffects: Effect[],
        private acedEffects:  Effect[]

    ) { Object.freeze(this); }

    getDescription(state: SkillState): string {
        switch (state) {
            case SkillState.ACED: return this.acedDescription;
            case SkillState.BASIC: return this.basicDescription;
            default: return "";
        }
    }

    getImage(state: SkillState): string {
        return this.image; // TODO multiple possible images (empy, basic, aced)
    }

    getEffects(state: SkillState): Effect[] {
        switch (state) {
            case SkillState.ACED:  return this.acedEffects;
            case SkillState.BASIC: return this.basicEffects;
            default: return [];
        }
    }

}

export enum SkillState {

    EMPTY,
    BASIC,
    ACED

}