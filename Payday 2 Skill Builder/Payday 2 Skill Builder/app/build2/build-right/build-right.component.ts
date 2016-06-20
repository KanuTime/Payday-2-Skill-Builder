import { Component, Input } from '@angular/core';

import { Build } from '../shared/build.model';
import { Overlay } from '../../shared/overlay.model';

@Component({
    selector: 'build-right',
    templateUrl: 'build-right.component.html',
    styleUrls: ['build-right.component.css'],
    moduleId: module.id
})
export class BuildRightComponent {

    @Input() build: Build;
    @Input() overlay: Overlay;
    
}