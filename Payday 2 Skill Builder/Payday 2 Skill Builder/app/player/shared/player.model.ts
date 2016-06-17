import { Armor } from '../../armor/shared/armor.model';
import { Effect } from '../../effect/effect.model';
import { Efficacious } from '../../effect/efficacious.model';

export class Player implements Efficacious {

    constructor(
        public armor: Armor
    ) { }

    allEffects(): Effect[] {
        return this.armor.allEffects();
    }

}