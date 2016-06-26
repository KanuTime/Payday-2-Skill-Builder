import { Injectable } from '@angular/core';

import { SkillSet, SkillClass } from '../index';
import { MastermindProvider } from './mastermind';

@Injectable()
export class SkillsetProvider {

    private instance: SkillSet;

    constructor(
        mastermindProvider: MastermindProvider    
    ) {
        this.instance = new SkillSet(
            mastermindProvider.getSkillClass(),
            mastermindProvider.getSkillClass(), // TODO
            mastermindProvider.getSkillClass(), // TODO
            mastermindProvider.getSkillClass(), // TODO
            mastermindProvider.getSkillClass()  // TODO
        );
    }

    getSkillSet(): SkillSet {
        return this.instance; 
    } 

}