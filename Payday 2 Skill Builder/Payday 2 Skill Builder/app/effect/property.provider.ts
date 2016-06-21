import { Property } from './index';

export namespace PropertyProvider {

    // Player stats
    export const ARMOR = new Property("Armor", "Armor is like a shield for you");
    export const CONCEALMENT = new Property("Concealment", "");
    export const SPEED = new Property("Speed", "");
    export const DODGE = new Property("Dodge", "");
    export const STEADINESS = new Property("Steadiness", "");
    export const STAMINA = new Property("Stamina", "");
    export const HEALTH = new Property("Health", "");
    export const ARMOR_RECOVERY = new Property("Armor Recovery", "", "s");

}