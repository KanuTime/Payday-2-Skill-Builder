import { Input, Output, EventEmitter, OnInit  } from '@angular/core';

export class Selection<A> implements OnInit {
    
    private _selected: A;

    @Input('selected') initiallySelected: A;
    @Output('selection') selection = new EventEmitter();

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
        this.selection.emit(this._selected);
    }

    elements(): A[] {
        return this.as;
    }
}