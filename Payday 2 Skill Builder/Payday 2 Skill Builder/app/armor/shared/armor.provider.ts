import { Injectable } from '@angular/core';

import { Armor } from '../index';

@Injectable()
export class ArmorProvider {

    get armors(): Armor[] { return this.ALL; }

    private ALL: Armor[] = [
        Armors.TWO_PIECE_SUIT,
        Armors.LIGHTWEIGHT_BALLISTIC_VEST,
        Armors.BALLISTIC_VEST,
        Armors.HEAVY_BALLISTIC_VEST,
        Armors.FLAK_JACKET,
        Armors.COMBINED_TACTICAL_VEST
    ];
}

export namespace Armors {

    export const TWO_PIECE_SUIT = new Armor("Two-piece Suit", 20, 30, 37, 10, 11, 21, 230, 3);
    export const LIGHTWEIGHT_BALLISTIC_VEST = new Armor("Lightweight Ballistic Vest", 30, 26, 36, -20, 11, 20, 230, 3);
    export const BALLISTIC_VEST = new Armor("Ballistic Vest", 40, 23, 35, -25, 12, 19, 230, 3);
    export const HEAVY_BALLISTIC_VEST = new Armor("Heavy Ballistic Vest", 50, 21, 33, -30, 13, 18, 230, 3);
    export const FLAK_JACKET = new Armor("Flak Jacket", 70, 18, 26, -35, 14, 17, 230, 3);
    export const COMBINED_TACTICAL_VEST = new Armor("Combined Tactical Vest", 90, 12, 23, -40, 16, 16, 230, 3);
    export const IMPROVED_COMBINED_TACTICAL_VEST = new Armor("Improved Combined Tactical Vest", 170, 1, 20, -50, 22, 14, 230, 3);
    
}