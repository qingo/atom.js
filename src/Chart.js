(function (window, $) {
    var lite = window.lite;
    lite.Chart = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'chart';
            lite.Chart.superclass.initialize.call(this, options);
            return this;
        },
        show: function (url, data) {

        },
        refresh: function (url, data) {

        }
    })
})(window, $);