export interface Observer<T> {

    onChange(changed: T): void;

}