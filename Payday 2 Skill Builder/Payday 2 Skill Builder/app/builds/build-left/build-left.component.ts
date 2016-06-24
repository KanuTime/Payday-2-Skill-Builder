import { Component, Input } from '@angular/core';

import { Build } from '../shared/build.model';

@Component({
    selector: 'build-left',
    templateUrl: 'build-left.component.html',
    styleUrls: ['build-left.component.css'],
    moduleId: module.id
})
export class BuildLeftComponent {

    private container: Container = new Container(42);

    @Input() build: Build

    doIt() {
        alert(this.container.value);
        this.container.value = 1;
    }

}

class Container {

    constructor(
        public value: number
    ) {
        Object.freeze(this);
    }

}