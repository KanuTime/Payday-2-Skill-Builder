import { Effect } from '../../..';

// Immutable
export class SkillModel {

    constructor(

        public name: string,
        
        public descriptionBasic: string,
        public descriptionAced: string,

        public imageEmpty: string,
        public imageBasic: string,
        public imageAced: string,

        public effectsBasic: Effect[],
        public effectsAced:  Effect[]

    ) { Object.freeze(this); }

    

}