import { Component, OnInit, Input } from '@angular/core';

import { Armor, ArmorProvider } from '../index';
import { Selection } from '../../shared/index';

@Component({
    selector: 'armor-selection',
    templateUrl: 'armor-selection.component.html',
    moduleId: module.id,
    providers: [ArmorProvider]
})
export class ArmorSelectionComponent extends Selection<Armor> {
    
    constructor(armorProvider: ArmorProvider) {
        super(armorProvider.armors());
    }

}