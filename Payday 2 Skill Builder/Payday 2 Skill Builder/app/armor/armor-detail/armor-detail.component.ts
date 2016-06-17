import { Component, Input } from '@angular/core';

import { Armor } from '../shared/armor.model';

@Component({
    selector: 'armor-detail',
    templateUrl: 'armor-detail.component.html',
    moduleId: module.id,
})
export class ArmorDetailComponent {

    @Input() private armor: Armor;

}