import { Component, Input, OnInit } from '@angular/core';

import { Build } from '../../builds/shared/build.model';

import { Skill, SkillDetailComponent } from '../index';
import { Effect, PropertyProvider } from '../..';

@Component({
    selector: 'skill-selection',
    templateUrl: 'skill-selection.component.html',
    moduleId: module.id,
    directives: [ SkillDetailComponent ]
})
export class SkillSelectionComponent implements OnInit {

    @Input() build: Build;
    private skill: Skill

    ngOnInit() {
        this.skill = new Skill("Bla", "Lets you do something", [ new Effect(PropertyProvider.ARMOR, 15, 50) ], []);
    }

}