(function (window, $) {
    var lite = window.lite;
    lite.Element = lite.Widget.extend({
        initialize: function (config) {
            lite.isObject(config) || (config = {});
            config.type = 'element';
            lite.Element.superclass.initialize.call(this, config);
            return this;
        },
        build: function () {
            this.label = $('<div class="label clr></div>" ')
        }

    })
})(window, $);