import { SkillBuildModel } from './index';
import { SkillClassConfig } from '../skill-class';

export class SkillBuildConfig {
    
    public mastermind: SkillClassConfig;
    public enforcer: SkillClassConfig;
    public technician: SkillClassConfig;
    public ghost: SkillClassConfig;
    public fugitive: SkillClassConfig;

    constructor(
        model: SkillBuildModel
    ) {
        this.mastermind = new SkillClassConfig(model.mastermind);
        this.enforcer = new SkillClassConfig(model.enforcer);
        this.technician= new SkillClassConfig(model.technician);
        this.ghost = new SkillClassConfig(model.ghost);
        this.fugitive = new SkillClassConfig(model.fugitive);

        Object.freeze(this);
    }

    get classes(): SkillClassConfig[] {
        return [
            this.mastermind,
            this.enforcer,
            this.technician,
            this.ghost,
            this.fugitive
        ];
    }

}