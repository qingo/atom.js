(function (window, $) {
    var lite = window.lite;
    lite.Chart = lite.Widget.extend({
        initialize: function (config) {
            lite.isObject(config) || (config = {});
            config.type = 'chart';
            lite.Chart.superclass.initialize.call(this, config);
            return this;
        },
        show: function (url, data) {

        },
        refresh: function (url, data) {

        }
    })
})(window, $);