import { Armor } from './armor/Armor';

export class ArmorSet {

    public selected: Armor;

    constructor(public armors: Armor[]) {
        this.selected = armors[0];
    }

    setSelected(armor: Armor) {
        this.selected = armor;
    }

}