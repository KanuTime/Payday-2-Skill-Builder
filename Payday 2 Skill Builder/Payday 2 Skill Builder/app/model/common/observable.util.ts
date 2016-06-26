import { Observer } from './observer.util';

export class Observable<T> {

    private observers: Observer<T>[];

    addObserver(observer: Observer<T>): void {
        this.observers.push(observer);
    }

    protected notifyObservers(change: T) {
        this.observers.forEach(o => o.onChange(change));
    }

}