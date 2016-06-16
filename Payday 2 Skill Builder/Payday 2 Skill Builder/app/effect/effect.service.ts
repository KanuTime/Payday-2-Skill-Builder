import { Injectable } from '@angular/core';

import { Effect } from './effect.model';
import { Property } from './property.model';

@Injectable()
export class EffectService {

    combineEffects(effects: Effect[]) {
        var map = { };
        for (var effect of effects) {
            if (effect.property in map) {
                map[effect.property] = effect.plus(map[effect.property]);
            } else {
                map[effect.property] = effect;
            }
        }
        return map;
    }

    reduceValues(effectMap: any) {
        const valueMap = { };
        for (let property in effectMap) {
            const effect = effectMap[property];
            const value = effect.absolute * (100 + effect.percental) / 100;
            valueMap[effect.property] = value;
        }
        return valueMap;
    }

}