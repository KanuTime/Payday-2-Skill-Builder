export class Overlay {

    private _state: OverlayState = OverlayState.EMPTY;

    get showOverlay() { return this._state != OverlayState.EMPTY; }
    get showArmor() { return this._state === OverlayState.ARMOR; }

    setEmpty() { this._state = OverlayState.EMPTY; }
    setArmor() { this._state = OverlayState.ARMOR; }

}

enum OverlayState {

    EMPTY, 
    ARMOR

}