"use strict";
exports.__esModule = true;
var Observable_1 = require("rxjs/Observable");
// create observable
var simpleObservable = new Observable_1.Observable(function (observer) {
    // observable execution
    observer.next("bla bla bla");
    observer.complete();
});
// subscribe to the observable
simpleObservable.subscribe();
// dispose the observable
simpleObservable.unsubscribe();
