import { Armor } from '../../armor/shared/armor.model';
import { Effect } from '../../effect/effect.model';
import { Efficacious } from '../../effect/efficacious.model';
import { BuildProvider } from './build.provider';

export class Build implements Efficacious {

    constructor(
        private _armor: Armor,
        private buildProvider: BuildProvider
    ) { }

    get armor() {
        return this._armor;
    }

    set armor(armor: Armor) {
        this._armor = armor;
        this.buildProvider.updateUrl(this);
    }

    allEffects(): Effect[] {
        return this.armor.allEffects();
    }

}