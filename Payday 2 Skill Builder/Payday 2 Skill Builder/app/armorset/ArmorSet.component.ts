import { Component } from '@angular/core';

import { Armor } from './armor/Armor';
import { ArmorService } from './armor/Armor.service';
import { ArmorSet } from './ArmorSet';

@Component({
    selector: 'ArmorSet',
    inputs: ['armors'],
    moduleId: module.id,
    templateUrl: 'ArmorSet.component.html',
    directives: [Armor],
    providers: [ArmorService]
})
export class ArmorSetComponent {

    public armorSet: ArmorSet;

    constructor(private armorService: ArmorService) {
        this.armorSet = new ArmorSet(armorService.getArmors());
    }

}