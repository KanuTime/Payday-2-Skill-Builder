import { Component, Input } from '@angular/core';

import { SkillClassConfig } from './index';
import { SkillTreeComponent, SkillInfoConfig } from '../index';

@Component({
    selector: 'skill-class',
    templateUrl: 'skill-class.component.html',
    directives: [ SkillTreeComponent ]
})
export class SkillClassComponent {

    @Input('skillClass') skillClass: SkillClassConfig;
    @Input('info') skillInfo: SkillInfoConfig;
    
}