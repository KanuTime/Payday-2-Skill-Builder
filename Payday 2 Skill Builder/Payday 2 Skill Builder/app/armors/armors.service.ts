import { Injectable }from '@angular/core';

import { Armor } from './armor/armor.component.ts';

@Injectable()
export class ArmorService {

    loadArmors() : Armor[] {
        return [];
    }

}