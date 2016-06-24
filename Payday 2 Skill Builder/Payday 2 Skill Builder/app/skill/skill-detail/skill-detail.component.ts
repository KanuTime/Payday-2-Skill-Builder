﻿import { Component, Input, OnInit } from '@angular/core';

import { Build } from '../../builds/shared/build.model';

import { Skill } from '../index';
import { Effect, PropertyProvider } from '../..';

@Component({
    selector: 'skill-detail',
    templateUrl: 'skill-detail.component.html',
    styleUrls: ['skill-detail.component.css'],
    moduleId: module.id
})
export class SkillDetailComponent {

    @Input() skill: Skill;
    
}