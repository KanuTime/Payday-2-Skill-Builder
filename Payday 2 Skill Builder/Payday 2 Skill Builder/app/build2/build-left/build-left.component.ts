import { Component, Input } from '@angular/core';

import { Build } from '../shared/build.model';

@Component({
    selector: 'build-left',
    templateUrl: 'build-left.component.html',
    styleUrls: ['build-left.component.css'],
    moduleId: module.id
})
export class BuildLeftComponent {

    @Input() build: Build

}