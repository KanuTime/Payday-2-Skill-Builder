import { Component } from '@angular/core';

import { PROVIDERS } from './app.providers';
import { DIRECTIVES }from './app.directives';

import { Overlay } from './shared/overlay.model';

import { Build } from './builds/shared/build.model';
import { BuildProvider } from './builds/shared/build.provider';


@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: DIRECTIVES,
    providers: PROVIDERS,
    moduleId: module.id
})
export class AppComponent {
    
    private build: Build;
    private overlay: Overlay = new Overlay();

    constructor(buildProvider: BuildProvider) {
        this.build = buildProvider.fromUrl();
        buildProvider.updateUrl(this.build);
    }
    
}
