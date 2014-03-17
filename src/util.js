(function (window, $) {
    window.util = {
        isObject: isType("Object"),
        isString: isType("String"),
        isArray: Array.isArray || isType("Array"),
        isFunction: isType("Function"),
        mix: function (r, s, wl) {
            // Copy "all" properties including inherited ones.
            for (var p in s) {
                if (s.hasOwnProperty(p)) {
                    if (wl && indexOf(wl, p) === -1) continue

                    // 在 iPhone 1 代等设备的 Safari 中，prototype 也会被枚举出来，需排除
                    if (p !== 'prototype') {
                        r[p] = s[p]
                    }
                }
            }
        }
    };
    function isType(type) {
        return function (obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]"
        }
    }
})(window, $);