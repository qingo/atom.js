(function (window, $) {
    var _cid = 0;
    window.lite = {
        version: '0.2.3',
        isObject: isType("Object"),
        isString: isType("String"),
        isArray: Array.isArray || isType("Array"),
        isFunction: isType("Function"),
        each: $.each,
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
            return t + '-' + _cid++
        },
        getJSON: function (url, callback, async) {
            $.ajax({
                url: url,
                cache: false,
                async: async || false,
                success: callback
            })
        },
        instance: {},
        getWidget: function (id) {
            return lite.instance[id] || null;
        }
    };
    function isType(type) {
        return function (obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]"
        }
    }
})(window, $);