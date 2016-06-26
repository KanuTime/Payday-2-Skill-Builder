import { SkillClassModel } from './index';
import { SkillTreeConfig } from '../skill-tree';

export class SkillClassConfig {

    public name: string;

    public left:   SkillTreeConfig;
    public middle: SkillTreeConfig;
    public right:  SkillTreeConfig;

    constructor(
        model: SkillClassModel
    ) {
        this.name = model.name;

        this.left = new SkillTreeConfig(model.left);
        this.middle = new SkillTreeConfig(model.middle);
        this.right = new SkillTreeConfig(model.right);

        Object.freeze(this);
    }

}