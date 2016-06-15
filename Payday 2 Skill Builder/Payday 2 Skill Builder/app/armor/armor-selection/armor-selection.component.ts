import { Component } from '@angular/core';

import { Armor } from '../shared/armor.model';
import { Selection } from '../../shared/selection.model';
import { Provider } from '../../shared/provider.interface';

@Component({
    selector: 'armor-selection',
    templateUrl: 'armor-selection.component.html',
    moduleId: module.id
})
export class ArmorSelectionComponent extends Selection<Armor> {
        
    constructor(armorProvider: Provider<Armor[]>) {
        super(armorProvider.get());
    }

}