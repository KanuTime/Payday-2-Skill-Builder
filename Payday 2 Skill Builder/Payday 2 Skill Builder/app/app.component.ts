import { Component, OnInit } from '@angular/core';

import { Armor } from './armor';
import { ArmorProvider } from './armor/shared/armor.provider';
import { ArmorSelectionComponent } from './armor/armor-selection/armor-selection.component';
import { ArmorDetailComponent } from './armor/armor-detail/armor-detail.component';

import { EffectService } from './effect/effect.service';
import { Effect } from './effect/effect.model';
import { PropertyProvider } from './effect/property.provider';

import { Player } from './player/shared/player.model';
import { PlayerStatsComponent } from './player/player-stats/player-stats.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [ArmorSelectionComponent, ArmorDetailComponent, PlayerStatsComponent],
    providers: [ArmorProvider, EffectService],
    moduleId: module.id,
})
export class AppComponent implements OnInit {
    
    constructor(
        private armorProvider: ArmorProvider,
        private effectService: EffectService
    ) { }

    ngOnInit() {
        this.player = this.createPlayer();
    }

    title = 'Payday 2 Skill Builder';

    player: Player;

    createPlayer(): Player {
        return new Player(this.armorProvider.get()[0]);
    }
    
    skills = [ new Effect(PropertyProvider.ARMOR, 50, 10) ];
    
    
    setSelectedArmor(armor: Armor) {
        this.player.armor = armor;
    }
    
}