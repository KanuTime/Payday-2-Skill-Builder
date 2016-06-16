import { Input, Output, EventEmitter, OnInit  } from '@angular/core';

export class Selection<A> implements OnInit {
    
    private _selected: A;

    @Input('selected') _initiallySelected: A;
    @Output('selection') _onSelection = new EventEmitter<A>();

    constructor(
        private as: A[]
    ){ }

    ngOnInit() {
        this._selected = this._initiallySelected;
        this._initiallySelected = undefined;
    }
    
    get selected(): A {
        return this._selected;
    }

    select(selected: A) {
        this._selected = selected;
        this._onSelection.emit(this._selected);
    }

    get elements(): A[] {
        return this.as;
    }
}