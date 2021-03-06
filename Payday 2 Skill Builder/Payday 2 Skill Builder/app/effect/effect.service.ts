﻿import { Injectable } from '@angular/core';

import {
    Effect,
    Efficacious,
    Property
} from './index';

@Injectable()
export class EffectService {

    evaluate(efficacious: Efficacious) {
        return this.reduceValues(
            this.combineEffects(efficacious.effects()));
    }

    private combineEffects(effects: Effect[]) {
        var map = { };
        for (var effect of effects) {
            if (effect.property.name in map) {
                map[effect.property.name] = effect.plus(map[effect.property.name]);
            } else {
                map[effect.property.name] = effect;
            }
        }
        return map;
    }

    private reduceValues(effectMap: any) {
        const valueMap = { };
        for (let property in effectMap) {
            const effect = effectMap[property];
            const value = effect.absolute * (100 + effect.percental) / 100;
            valueMap[effect.property.name] = value;
        }
        return valueMap;
    }

}