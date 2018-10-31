"use strict";
// Create an Observable that will start listening to geolocation updates
// when a consumer subscribes.
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var locations = new rxjs_1.Observable(function (observer) {
    // Get the next and error callbacks. These will be passed in when
    // the consumer subscribes.
    var next = observer.next, error = observer.error;
    var watchId;
    // Simple geolocation API check provides values to publish
    if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(next, error);
    }
    else {
        error('Geolocation not available');
    }
    // When the consumer unsubscribes, clean up data ready for next subscription.
    return { unsubscribe: function () { navigator.geolocation.clearWatch(watchId); } };
});
// Call subscribe() to start listening for updates.
var locationsSubscription = locations.subscribe({
    next: function (position) { console.log('Current Position: ', position); },
    error: function (msg) { console.log('Error Getting Location: ', msg); }
});
// Stop listening for location after 10 seconds
setTimeout(function () { locationsSubscription.unsubscribe(); }, 10000);
