import { Injectable } from '@angular/core';

import { Provider } from '../..';
import { Armor } from './armor.model';

@Injectable()
export class ArmorProvider implements Provider<Armor[]> {

    get(): Armor[] {
        return ARMORS;
    }

}

const ARMORS: Armor[] = [
    new Armor("Suit"),
    new Armor("Vest")
];