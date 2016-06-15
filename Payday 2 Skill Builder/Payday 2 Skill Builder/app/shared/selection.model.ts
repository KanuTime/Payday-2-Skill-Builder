//import { ControlValueAccessor } from '@angular/common';

export class Selection<A>  {

    private as: A[];
    private select: A; 

    //private onChange: (A) => void;

   /* constructor(elements: A[], selected?: A) {
        this.as = elements;
        this.select = selected;
    }*/

    setElements(elements: A[]) {
        this.as = elements;
    }

    getSelected(): A {
        return this.select;
    }

    setSelected(selected: A) {
        this.select = selected;
        //this.onChange(selected);
    }

    elements(): A[] {
        return this.as;
    }
    /*
    writeValue(value: A) {
        this.select = value;
    }

    registerOnChange(fn: (A) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: (A) => void) {
        // you can't touch this
    }*/
}