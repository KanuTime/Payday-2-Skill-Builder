import { Injectable } from '@angular/core';

@Injectable()
export class SkillPointsConfig {

    private value: number;

    constructor(
        startValue?: number
    ) {
        this.value = startValue ? startValue : MAX_VALUE;
    }

    getRemaining(): number {
        return this.value;
    }

    canBuySkill(costs: number): boolean {
        return this.value - costs >= 0;
    }

    buySkill(costs: number) {
        this.value -= costs;
    }

    sellSkill(costs: number) {
        this.value = Math.min(this.value + costs, MAX_VALUE); 
    }

}

const MAX_VALUE = 100;