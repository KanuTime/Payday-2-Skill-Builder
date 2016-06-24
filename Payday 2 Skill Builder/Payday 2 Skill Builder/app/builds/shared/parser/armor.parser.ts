import { Injectable } from '@angular/core';

import { Armor, ArmorProvider } from '../../../armor/index';

@Injectable()
export class ArmorParser {

    private armors: Armor[];

    constructor(armorProvider: ArmorProvider) {
        this.armors = armorProvider.armors;
    }   

    public fromToken(armor: string): Armor {
        const index = armor === null ? 0 : parseInt(armor);
        return this.armors[index >= 0 && index < this.armors.length ? index : 0];
    }

    public toToken(armor: Armor): string {
        return "" + this.armors.indexOf(armor);
    }

}