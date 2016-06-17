import { Component, Input } from '@angular/core';

@Component({
    selector: 'default',
    templateUrl: 'default.component.html',
    moduleId: module.id
})
export class DefaultComponent {

    @Input() value: string

}