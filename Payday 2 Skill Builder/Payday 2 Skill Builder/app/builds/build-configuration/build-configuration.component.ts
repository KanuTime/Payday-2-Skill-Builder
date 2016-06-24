import { Component, Input } from '@angular/core';

import { Build } from '../index';

import { BuildLeftComponent } from '../build-left/build-left.component';
import { BuildRightComponent } from '../build-right/build-right.component';

import {
    ArmorDetailComponent,
    ArmorSelectionComponent,

    Overlay
} from '../..';

@Component({
    selector: 'build-configuration',
    templateUrl: 'build-configuration.component.html',
    styleUrls: ['build-configuration.css'],
    moduleId: module.id,
    directives: [BuildLeftComponent, BuildRightComponent],

})
export class BuildConfigurationComponent {

    @Input() build: Build ;
    @Input() overlay: Overlay;

}