"use strict";
var Observable = (function () {
    function Observable() {
    }
    Observable.prototype.addObserver = function (observer) {
        this.observers.push(observer);
    };
    Observable.prototype.notifyObservers = function (change) {
        this.observers.forEach(function (o) { return o.onChange(change); });
    };
    return Observable;
}());
exports.Observable = Observable;
//# sourceMappingURL=observable.util.js.map