(function (window, $) {
    window.Chart = Widget.extend({
        initialize: function (options) {
            Chart.superclass.initialize.call(this, options);
        },
        render: function () {
            this.$el = $('<div class="Chart"></div>')
        },
        show: function (url, data) {

        },
        refresh: function (url, data) {

        },
        addItem: function (type, widget) {
            var wid = new window[type](widget);
            this.$el.append(wid.$el);
            return this;
        }
    })
})(window, $);