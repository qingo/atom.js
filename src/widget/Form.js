(function (window, $) {
    var lite = window.lite;
    lite.Form = lite.Widget.extend({
        initialize: function (config) {
            lite.isObject(config) || (config = {});
            config.type = 'form';
            lite.Form.superclass.initialize.call(this, config);
            return this;
        },
        setMember: function (config) {
            this.member = config.member || [];
            return this;
        }
    })
})(window, $);