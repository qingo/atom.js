(function (window, $) {
    var lite = window.lite;
    lite.Element = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'element';
            lite.Element.superclass.initialize.call(this, options);
            return this;
        },
        build: function(){
            this.label = $('<div class="label clr></div>" ')
        }

    })
})(window, $);