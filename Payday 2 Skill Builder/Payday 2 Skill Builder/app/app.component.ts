import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

import { Armor } from './armor';
import { ArmorProvider } from './armor/shared/armor.provider';
import { ArmorSelectionComponent } from './armor/armor-selection/armor-selection.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [HeroDetailComponent, ArmorSelectionComponent],
    providers: [HeroService, ArmorProvider],
    moduleId: module.id,
})
export class AppComponent implements OnInit {

    ngOnInit() {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    constructor(private heroService: HeroService) {
        
    }

    title = 'Tour of Heroes';
    heroes : Hero[];
    selectedHero: Hero;
    selectedArmor: Armor = new ArmorProvider().get()[0];

    onSelect(hero: Hero) { this.selectedHero = hero; }


    
}