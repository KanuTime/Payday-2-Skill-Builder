import { BuildProvider } from '../index';

import {
    Armor,
    Effect,
    Efficacious,
    Skillset
} from '../..';

export class Build implements Efficacious {

    constructor(
        private _armor: Armor,
        private _skillset: Skillset,
        private buildProvider: BuildProvider
    ) { }

    get armor() {
        return this._armor;
    }

    get skillset() {
        return this._skillset;
    }

    set armor(armor: Armor) {
        this._armor = armor;
        this.buildProvider.updateUrl(this);
    }

    set skillset(skillset: Skillset) {
        this._skillset = skillset;
        this.buildProvider.updateUrl(this);
    }

    effects(): Effect[] {
        return this.armor.effects();//.concat(this.skillset.effects());
    }

}