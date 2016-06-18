"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_provider_1 = require('./app.provider');
var build_provider_1 = require('./build/shared/build.provider');
var build_stats_component_1 = require('./build/build-stats/build-stats.component');
var build_configuration_component_1 = require('./build/build-configuration/build-configuration.component');
var AppComponent = (function () {
    function AppComponent(buildProvider) {
        this.build = buildProvider.fromUrl();
        buildProvider.updateUrl(this.build);
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app.component.html',
            styleUrls: ['app.component.css'],
            directives: [build_stats_component_1.BuildStatsComponent, build_configuration_component_1.BuildConfigurationComponent],
            providers: app_provider_1.PROVIDERS,
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [build_provider_1.BuildProvider])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map