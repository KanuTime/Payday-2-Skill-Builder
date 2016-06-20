import { Build } from '../shared/build.model';
import { EffectService } from '../../effect/effect.service';
import { Effect } from '../../effect/effect.model';
import { Property } from '../../effect/property.model';
import { PropertyProvider } from '../../effect/property.provider';

export class BuildStat {

    constructor(
        private _name: string,
        private _totalValue: number,
        private _baseValue: number,
        private _skillValue: number
    ) { }

    get name() { return this._name; }
    get total() { return this._totalValue; }
    get base() { return this._baseValue; } 
    get skill() { return this._skillValue; }
    
}