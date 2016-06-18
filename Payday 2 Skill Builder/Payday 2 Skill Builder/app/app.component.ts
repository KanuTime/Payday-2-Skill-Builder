import { Component } from '@angular/core';

import { PROVIDERS } from './app.provider';

import { Build } from './build/shared/build.model';
import { BuildProvider } from './build/shared/build.provider';

import { BuildStatsComponent } from './build/build-stats/build-stats.component';
import { BuildConfigurationComponent } from './build/build-configuration/build-configuration.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ BuildStatsComponent, BuildConfigurationComponent ],
    providers: PROVIDERS,
    moduleId: module.id
})
export class AppComponent {
    
    build: Build;

    constructor(buildProvider: BuildProvider) {
        this.build = buildProvider.fromUrl();
        buildProvider.updateUrl(this.build);
    }
    
}

