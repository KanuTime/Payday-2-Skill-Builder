import { Injectable } from '@angular/core';

import { Armor } from './armor.model';

@Injectable()
export class ArmorProvider {
    armors(): Armor[] { return ARMORS; }
}

const TWO_PIECE_SUIT = new Armor("Two-piece Suit", 20, 30, 37, 10, 11, 21, 230, 3);
const LIGHTWEIGHT_BALLISTIC_VEST = new Armor("Lightweight Ballistic Vest", 30, 26, 36, -20, 11, 20, 230, 3);
const BALLISTIC_VEST = new Armor("Ballistic Vest", 40, 23, 35, -25, 12, 19, 230, 3);
const HEAVY_BALLISTIC_VEST = new Armor("Heavy Ballistic Vest", 50, 21, 33, -30, 13, 18, 230, 3);
const FLAK_JACKET = new Armor("Flak Jacket", 70, 18, 26, -35, 14, 17, 230, 3);
const COMBINED_TACTICAL_VEST = new Armor("Combined Tactical Vest", 90, 12, 23, -40, 16, 16, 230, 3);
const IMPROVED_COMBINED_TACTICAL_VEST = new Armor("Improved Combined Tactical Vest", 170, 1, 20, -50, 22, 14, 230, 3);

const ARMORS: Armor[] = [
    TWO_PIECE_SUIT,
    LIGHTWEIGHT_BALLISTIC_VEST,
    BALLISTIC_VEST,
    HEAVY_BALLISTIC_VEST,
    FLAK_JACKET,
    COMBINED_TACTICAL_VEST
];