import { Component, Input } from '@angular/core';

import { Armor } from '../shared/armor.model';

@Component({
    selector: 'armor-preview',
    templateUrl: 'armor-preview.component.html',
    moduleId: module.id
})
export class ArmorPreviewComponent {

    @Input() armor: Armor;

}