(function (window, $) {
    var lite = window.lite;
    lite.Form = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'form';
            lite.Form.superclass.initialize.call(this, options);
            return this;
        },
        _setMember: function (options) {
            this.member = options.member || [];
            return this;
        }
    })
})(window, $);