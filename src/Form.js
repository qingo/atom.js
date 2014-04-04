(function (window, $) {
    var lite = window.lite;
    lite.Form = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'form';
            options.events = {
                'init .submit': 'trigger',
                'click .submit': 'trigger'
            };
            lite.Form.superclass.initialize.call(this, options);
            return this;
        }
    })
})(window, $);