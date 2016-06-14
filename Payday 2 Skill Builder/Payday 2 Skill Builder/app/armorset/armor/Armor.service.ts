import { Injectable } from '@angular/core';

import { Armor } from './Armor';

@Injectable()
export class ArmorService {

    getArmors(): Armor[] { return ARMORS; }

}

var ARMORS: Armor[] = [
    new Armor("Suit"),
    new Armor("Vest")
];