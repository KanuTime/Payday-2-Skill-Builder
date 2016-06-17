import { Component, Input, OnInit } from '@angular/core';

import { Player } from '../shared/player.model';
import { EffectService } from '../../effect/effect.service';

@Component({
    selector: 'player-stats',
    templateUrl: 'player-stats.component.html',
    moduleId: module.id
})
export class PlayerStatsComponent {

    @Input() private player: Player;

    private stats: any;

    constructor(
        private effectService: EffectService
    ) {
        
    }

    ngOnInit() {
        //this.stats = this.effectService.evaluate(this.player);
    }

}