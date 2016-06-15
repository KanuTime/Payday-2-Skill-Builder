import { Component, Input } from '@angular/core';

import { Armor } from '../shared';

@Component({
    selector: 'armor-detail',
    templateUrl: 'armor-detail.component.html',
    moduleId: module.id,
})
export class ArmorDetailComponent {

    constructor(
        @Input() public armor: Armor
    ) { }

}