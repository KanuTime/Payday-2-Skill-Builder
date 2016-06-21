import { Property } from './index';

export class Effect {
        
    constructor(
        private _property: Property,
        private _percental: number,
        private _absolute: number
    ) { }

    get property()  : Property { return this._property;  }
    get percental() : number   { return this._percental; }
    get absolute()  : number   { return this._absolute;  }

    plus(effect: Effect): Effect {
        return new Effect(
            this.property,
            this.percental + effect.percental,
            this.absolute  + effect.absolute
        );
    }

}