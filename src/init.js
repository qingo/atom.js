(function (window, $) {
    var _cid = 0;
    window.lite = {
        version: '0.1.5',
        isObject: isType("Object"),
        isString: isType("String"),
        isArray: Array.isArray || isType("Array"),
        isFunction: isType("Function"),
        mix: function (result, source, wl) {
            // Copy "all" properties including inherited ones.
            for (var p in source) {
                if (source.hasOwnProperty(p)) {
                    if (wl && indexOf(wl, p) === -1) continue;

                    // 在 iPhone 1 代等设备的 Safari 中，prototype 也会被枚举出来，需排除
                    if (p !== 'prototype') {
                        result[p] = source[p]
                    }
                }
            }
        },
        cid: function (t) {
            return t + _cid++
        },
        observer: {
            setParameter: function () {

            },
            addObserver: function (observer) {
                this.observers[observer.id] = observer;
            },
            getObserver: function (observerId) {
                lite.isString(observerId) || (observerId = observerId.id);
                return this.observers[observerId];
            },
            removeObserver: function (observer) {
                lite.isString(observerId) || (observerId = observerId.id);
                delete this.observers[observerId];
            }
        }
    };
    function isType(type) {
        return function (obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]"
        }
    }
})(window, $);