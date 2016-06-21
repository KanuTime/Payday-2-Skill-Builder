import { Component, Input, OnInit } from '@angular/core';

import { Build } from '../../builds/shared/build.model';

import { Skill } from '../index';
import { Effect, PropertyProvider } from '../..';

@Component({
    selector: 'skill-selection',
    templateUrl: 'skill-selection.component.html',
    moduleId: module.id
})
export class SkillSelectionComponent implements OnInit {

    @Input() build: Build;
    private skill: Skill

    ngOnInit() {
        this.skill = new Skill("Bla", [ new Effect(PropertyProvider.ARMOR, 15, 50) ], []);
    }

}