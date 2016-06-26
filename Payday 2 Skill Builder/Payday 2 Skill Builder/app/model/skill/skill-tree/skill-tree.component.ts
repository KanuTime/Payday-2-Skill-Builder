import { Component, Input } from '@angular/core';

import { SkillTreeConfig } from './index';
import { SkillComponent, SkillInfoConfig } from '../index';

@Component({
    selector: 'skill-tree',
    templateUrl: 'skill-tree.component.html',
    directives: [ SkillComponent ]
})
export class SkillTreeComponent {

    @Input('tree') skillTree: SkillTreeConfig;
    @Input('info') skillInfo: SkillInfoConfig;
    
}