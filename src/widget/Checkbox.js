(function (window, $) {
    var lite = window.lite;
    lite.Checkbox = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'checkbox';
            lite.Checkbox.superclass.initialize.call(this, options);
            return this;
        }

    })
})(window, $);