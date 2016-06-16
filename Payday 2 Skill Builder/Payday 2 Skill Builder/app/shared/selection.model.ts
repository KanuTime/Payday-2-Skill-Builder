import { Input, Output, EventEmitter, OnInit  } from '@angular/core';

export class Selection<A> implements OnInit {
    
    private _selected: A;

    @Input('selected') initiallySelected: A;
    @Output('selection') onSelection = new EventEmitter();

    constructor(
        private as: A[]
    ){ }

    ngOnInit() {
        this._selected = this.initiallySelected;
        this.initiallySelected = undefined;
    }
    
    selected(): A {
        return this._selected;
    }

    select(selected: A) {
        this._selected = selected;
        this.onSelection.emit(this._selected);
    }

    elements(): A[] {
        return this.as;
    }
}