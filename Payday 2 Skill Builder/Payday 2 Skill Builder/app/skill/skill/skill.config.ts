import { SkillModel } from './index';

import { SkillPointsConfig } from '../skill-points';
import { Effect } from '../../..';

enum SkillState { EMPTY, BASIC, ACED }

export class SkillConfig {

    private state: SkillState = SkillState.EMPTY;

    constructor(
        private model: SkillModel,
        private costsBasic: number,
        private costsAced: number
    ) { }
    
    get name(): string {
        return this.model.name;
    }

    get description(): string {
        switch (this.state) {
            case SkillState.ACED: return this.model.descriptionAced;
            case SkillState.BASIC: return this.model.descriptionBasic;
            default: throw "SkillConfig: Tried to get description of an empty skill!";
        }
    }

    get image(): string {
        return this.model.imageEmpty; // TODO multiple possible images (empy, basic, aced)
    }

    get effects(): Effect[] {
        switch (this.state) {
            case SkillState.ACED: return this.model.effectsAced;
            case SkillState.BASIC: return this.model.effectsBasic;
            default: return [];
        }
    }

    private get costsToRaise(): number {
        switch (this.state) {
            case SkillState.EMPTY: return this.costsBasic;
            case SkillState.BASIC: return this.costsAced;
            default: return 0;
        }
    }

    maybeRaise(skillPoints: SkillPointsConfig): boolean {
        if (this.state != SkillState.ACED
            && skillPoints.canBuySkill(this.costsToRaise)) {
            skillPoints.buySkill(this.costsToRaise);
            this.raise();
            return true;
        } 
        return false;
    }

    private raise(): void {
        switch (this.state) {
            case SkillState.EMPTY: this.state = SkillState.BASIC; break;
            case SkillState.BASIC: this.state = SkillState.ACED; break;
            default: throw "SkillConfig: Tried to raise already aced skill!";
        }
    }

    maybeLower(skillPoints: SkillPointsConfig): boolean {
        if (this.state != SkillState.EMPTY) {
            this.lower();
            skillPoints.sellSkill(this.costsToRaise);
            return true;
        }
        return false;
    }

    private lower(): void {
        switch (this.state) {
            case SkillState.ACED: this.state = SkillState.BASIC; break;
            case SkillState.BASIC: this.state = SkillState.EMPTY; break;
            default: throw "SkillConfig: Tried to lower already empty skill!";
        }
    }
    
}