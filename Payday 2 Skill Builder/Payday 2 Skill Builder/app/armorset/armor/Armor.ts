import { Component } from '@angular/core';

import { Mock } from 'engine/lib';

@Component({
    selector: 'Armor',
    inputs: ['name'],
    moduleId: module.id,
    templateUrl: './Armor.component.html'
})
export class Armor {

    hero: Mock = new Mock();

    constructor(
        public name: string/*,
        public armor: number,
        public concealment: number,
        public speed: number,
        public dodge: number,
        public steadiness: number,
        public stamina: number,
        public health: number,
        public armorRecovery: number*/
    ) { }

}