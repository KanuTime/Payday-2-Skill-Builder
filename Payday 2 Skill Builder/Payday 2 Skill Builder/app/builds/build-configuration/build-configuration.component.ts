import { Component, Input } from '@angular/core';

import { Build } from '../shared/build.model';

import { BuildLeftComponent } from '../build-left/build-left.component';
import { BuildRightComponent } from '../build-right/build-right.component';

import { ArmorSelectionComponent } from '../../armor/armor-selection/armor-selection.component';
import { ArmorDetailComponent } from '../../armor/armor-detail/armor-detail.component';

import { Overlay } from '../../shared/overlay.model';

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