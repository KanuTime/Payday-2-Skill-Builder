import { SkillTreeModel } from './index';
import { SkillConfig } from '../skill';

export class SkillTreeConfig {

    public name: string;

    public tier_1: SkillConfig;
    public tier_2_l: SkillConfig;
    public tier_2_r: SkillConfig;
    public tier_3_l: SkillConfig;
    public tier_3_r: SkillConfig;
    public tier_4: SkillConfig;

    constructor(
        model: SkillTreeModel
    ) {
        this.name = model.name;

        this.tier_1 = new SkillConfig(model.tier_1, COSTS_BASIC_TIER_1, COSTS_ACED_TIER_1);
        this.tier_2_l = new SkillConfig(model.tier_2_l, COSTS_BASIC_TIER_2, COSTS_ACED_TIER_2);
        this.tier_2_r = new SkillConfig(model.tier_2_r, COSTS_BASIC_TIER_2, COSTS_ACED_TIER_2);
        this.tier_3_l = new SkillConfig(model.tier_3_l, COSTS_BASIC_TIER_3, COSTS_ACED_TIER_3);
        this.tier_3_r = new SkillConfig(model.tier_3_r, COSTS_BASIC_TIER_3, COSTS_ACED_TIER_3);
        this.tier_4 = new SkillConfig(model.tier_4, COSTS_BASIC_TIER_4, COSTS_ACED_TIER_4);

        Object.freeze(this);
    }

}

// Costs basic
const COSTS_BASIC_TIER_1 = 1;
const COSTS_BASIC_TIER_2 = 2;
const COSTS_BASIC_TIER_3 = 3;
const COSTS_BASIC_TIER_4 = 4;

// Costs aced
const COSTS_ACED_TIER_1 = 3;
const COSTS_ACED_TIER_2 = 4;
const COSTS_ACED_TIER_3 = 5;
const COSTS_ACED_TIER_4 = 6;