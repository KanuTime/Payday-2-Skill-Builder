import { ControlValueAccessor } from '@angular/common';

export class Selection<A> implements ControlValueAccessor {

    private as: A[];
    private select: A;

    private onChange: (A) => void;

    constructor(as: A[], select?: A) {
        this.as = as;
        this.select = select ? select : as[0];
    }
    
    get selected(): A {
        return this.select;
    }

    set selected(selected: A) {
        this.select = selected;
        this.onChange(selected);
    }

    get elements(): A[] {
        return this.as;
    }
    
    writeValue(value: A) {
        this.select = value;
    }

    registerOnChange(fn: (A) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: (A) => void) {
        // you can't touch this
    }
}