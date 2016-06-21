import {
    Effect
} from '../..';

export class Skill {

    constructor(
        private _name: string,
        private _effectsBasic: Effect[],
        private _effectsAced: Effect[]
    ) { }

    get name(): string { return this._name; }    
    get effectsBasic(): Effect[] { return this._effectsBasic; }
    get effectsAced(): Effect[] { return this._effectsAced; }


}