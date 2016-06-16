import { Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { ControlValueAccessor } from '@angular/common';

export class Selection<A> implements OnInit {

    private as: A[];
    private select: A;
    
    @Output('selection')
    public selectionEvent = new EventEmitter();

    constructor(as: A[], private selectedSupplier: () => A) {
        this.as = as;
    }

    ngOnInit() {
        this.select = this.selectedSupplier();
    }
    
    getSelected(): A {
        return this.select;
    }

    setSelected(selected: A) {
        this.select = selected;
        this.selectionEvent.emit({
            value: this.select
        });
    }

    elements(): A[] {
        return this.as;
    }
}