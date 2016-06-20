import { Injectable } from '@angular/core';

import { Build } from '../shared/build.model';
import { Effect } from '../../effect/effect.model';
import { Property } from '../../effect/property.model';
import { PropertyProvider } from '../../effect/property.provider';
import { BuildStat } from './build-stat.model';

@Injectable()
export class BuildStatsProvider {

    public getBuildStats(build: Build): BuildStat[] {        
        return PROPERTIES.map(property => {

            const totalValue = this.selectEffect(property, build.allEffects()).absolute;
            const baseValue = this.selectEffect(property, build.armor.allEffects()).absolute;

            return new BuildStat(
                property.name,
                totalValue,
                baseValue,
                totalValue - baseValue
            );

        });
    }

    private selectEffect(property: Property, effects: Effect[]): Effect {
        return effects.find(e => e.property == property);
    }

}

const PROPERTIES: Property[] = [
    PropertyProvider.ARMOR,
    PropertyProvider.HEALTH,
    PropertyProvider.CONCEALMENT,
    PropertyProvider.SPEED,
    PropertyProvider.DODGE,
    PropertyProvider.STEADINESS,
    PropertyProvider.STAMINA
];