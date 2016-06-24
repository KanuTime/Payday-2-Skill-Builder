export class Overlay {

    private _state: OverlayState = OverlayState.EMPTY;

    get showOverlay() { return this._state != OverlayState.EMPTY; }
    get showArmor() { return this._state === OverlayState.ARMOR; }
    get showSkillset() { return this._state === OverlayState.SKILLSET; }

    setEmpty() { this._state = OverlayState.EMPTY; }
    setArmor() { this._state = OverlayState.ARMOR; }
    setSkillset() { this._state = OverlayState.SKILLSET; }

}

enum OverlayState {

    EMPTY, 
    ARMOR,
    SKILLSET

}