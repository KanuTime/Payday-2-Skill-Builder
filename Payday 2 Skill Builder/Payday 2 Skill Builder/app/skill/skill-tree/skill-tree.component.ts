import { Component, Input } from '@angular/core';

@Component({
    selector: 'skill-tree',
    templateUrl: 'skill-tree.component.html',
    moduleId: module.id
})
export class SkillTreeComponent {

    @Input() value: string

}