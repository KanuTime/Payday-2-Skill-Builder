import {
    Effect,
    Efficacious,
    PropertyProvider
} from '../..';

export class Armor {

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
    ) {
        Object.freeze(this);
    }

    get name(): string { return this._name; }

    get armor(): Effect { return PropertyProvider.ARMOR.absolute(this._armor); }
    get concealment(): Effect { return PropertyProvider.CONCEALMENT.absolute(this._concealment); }
    get speed(): Effect { return PropertyProvider.SPEED.absolute(this._speed); }
    get dodge(): Effect { return PropertyProvider.DODGE.absolute(this._dodge); }
    get steadiness(): Effect { return PropertyProvider.STEADINESS.absolute(this._steadiness); }
    get stamina(): Effect { return PropertyProvider.STAMINA.absolute(this._stamina); }
    get health(): Effect { return PropertyProvider.HEALTH.absolute(this._health); }
    get armorRecovery(): Effect { return PropertyProvider.ARMOR_RECOVERY.absolute(this._armorRecovery); }

    effects(): Effect[] {
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