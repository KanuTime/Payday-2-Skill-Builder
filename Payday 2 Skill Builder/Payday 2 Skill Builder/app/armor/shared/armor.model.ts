import { Provider } from '@angular/core';
import { Effect } from '../../effect/effect.model';
import { Property } from '../../effect/property.model';
import { Efficacious } from '../../effect/efficacious.model';

export class Armor implements Efficacious {

    constructor(
        private _name: string,

        private _armor: number,
        private _concealment: number,
        private _speed: number,
        private _dodge: number,
        private _steadiness: number,
        private _stamina: number,
        private _health: number,
        private _armorRecovery: number
    ) { }

    get name(): string { return this._name; }

    get armor(): Effect { return new Effect(Property.ARMOR, 0, this._armor); }
    get concealment(): Effect { return new Effect(Property.CONCEALMENT, 0, this._concealment); }
    get speed(): Effect { return new Effect(Property.SPEED, 0, this._speed); }
    get dodge(): Effect { return new Effect(Property.DODGE, 0, this._dodge); }
    get steadiness(): Effect { return new Effect(Property.STEADINESS, 0, this._steadiness); }
    get stamina(): Effect { return new Effect(Property.STAMINA, 0, this._stamina); }
    get health(): Effect { return new Effect(Property.HEALTH, 0, this._health); }
    get armorRecovery(): Effect { return new Effect(Property.ARMOR_RECOVERY, 0, this._armorRecovery); }

    allEffects(): Effect[] {
        return [
            this.armor,
            this.concealment,
            this.speed,
            this.dodge,
            this.steadiness,
            this.stamina,
            this.health,
            this.armorRecovery
        ];
    }
}