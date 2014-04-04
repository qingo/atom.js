(function (window, $) {
    var lite = window.lite;
    lite.Button = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'button';
            lite.Button.superclass.initialize.call(this, options);
            return this;
        }
    })
})(window, $);