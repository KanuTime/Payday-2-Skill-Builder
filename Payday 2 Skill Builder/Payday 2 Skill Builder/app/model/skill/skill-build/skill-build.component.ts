import { Component, Input, OnInit } from '@angular/core';

import { SkillBuildConfig } from './index';
import { SkillClassComponent, SkillClassConfig, SkillInfoConfig } from '../index';

@Component({
    selector: 'skill-build',
    templateUrl: 'skill-build.component.html',
    directives: [ SkillClassComponent ]
})
export class SkillBuildComponent implements OnInit {

    @Input('build') build: SkillBuildConfig;

    private selectedClass: SkillClassConfig;

    ngOnInit() {
        this.selectedClass = this.build.mastermind;
    }

    selectClass(skillClass: SkillClassConfig) {
        this.selectedClass = skillClass;
    }

}