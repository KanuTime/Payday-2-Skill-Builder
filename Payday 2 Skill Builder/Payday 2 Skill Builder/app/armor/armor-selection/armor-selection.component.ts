import { Component, OnInit, Input } from '@angular/core';

import { Armor } from '../shared/armor.model';
import { Selection } from '../../shared/selection.model';

import { ArmorProvider } from '../shared/armor.provider';

@Component({
    selector: 'armor-selection',
    templateUrl: 'armor-selection.component.html',
    moduleId: module.id,
    providers: [ArmorProvider]
})
export class ArmorSelectionComponent extends Selection<Armor> implements OnInit {

    @Input() armor: Armor;

    constructor(armorProvider: ArmorProvider) {
        super(armorProvider.get(), () => this.armor);
    }

}