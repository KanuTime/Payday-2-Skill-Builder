import { Effect } from './effect.model';

export class Property {

    constructor(
        private _name: string,
        private _description: string,
        private _unit?: string
    ) { }

    get name(): string { return this._name; }
    get description(): string { return this._description; }
    get unit(): string { return this._unit ? this._unit : ""; }

    absolute(value: number) {
        return new Effect(this, 0, value);
    }

    percental(value: number) {
        return new Effect(this, value, 0);
    }

}

