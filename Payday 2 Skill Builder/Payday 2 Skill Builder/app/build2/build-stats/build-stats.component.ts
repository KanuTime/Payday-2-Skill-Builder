import { Component, Input, OnInit } from '@angular/core';

import { Build } from '../shared/build.model';
import { BuildStatsProvider } from './build-stats.provider';
import { BuildStat } from './build-stat.model';
import { EffectService } from '../../effect/effect.service';
import { Effect } from '../../effect/effect.model';
import { Property } from '../../effect/property.model';
import { PropertyProvider } from '../../effect/property.provider';

@Component({
    selector: 'build-stats',
    templateUrl: 'build-stats.component.html',
    styleUrls: ['build-stats.component.css'],
    moduleId: module.id
})
export class BuildStatsComponent {

    @Input() private build: Build;

    constructor(private buildStatsProvider: BuildStatsProvider) { }
    
    get stats(): BuildStat[] {
        return this.buildStatsProvider.getBuildStats(this.build);
    }

}