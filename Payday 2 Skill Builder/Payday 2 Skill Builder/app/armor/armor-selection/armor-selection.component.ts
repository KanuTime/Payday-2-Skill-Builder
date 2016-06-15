import { Component } from '@angular/core';

import { Armor } from '../';
import { Selection, Provider } from '../..';

@Component({
    selector: 'armor-selection',
    templateUrl: 'armor-selection.component.html',
    providers: [],
    moduleId: module.id
})
export class ArmorSelectionComponent {//extends Selection<Armor> {
    
    constructor(armorProvider: Provider<Armor[]>) {
        //super();
        //super(armorProvider.get());
    }

}