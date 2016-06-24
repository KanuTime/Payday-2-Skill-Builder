import { Injectable } from '@angular/core';

import { Build } from './build.model';
import { Armor } from '../../armor/shared/armor.model';

import { ArmorParser } from './parser/armor.parser';

@Injectable()
export class BuildProvider {

    constructor(
        private armorParser: ArmorParser
    ) { }
    
    updateUrl(build: Build): void {
        history.pushState({}, "", "/" + this.toUrl(build));
    }

    toUrl(build: Build): string {
        const armor: string = ARMOR_TOKEN + "=" + this.armorParser.toToken(build.armor);
        // ... 
        return "?" + armor;
    }
    
    fromUrl(): Build {
        const armor: Armor = this.armorParser.fromToken(this.extractValueOfToken(ARMOR_TOKEN));
        // ...
        return new Build(armor, null, this);
    }

    private extractValueOfToken(token: string): string {
        return decodeURIComponent(
            (new RegExp('[?|&]' + token + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)
                || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }   

}

const ARMOR_TOKEN: string = "armor";

