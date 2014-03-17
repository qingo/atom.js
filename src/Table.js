(function (window, $) {
    window.Table = Widget.extend({
        initialize: function (options) {
            Page.superclass.initialize.call(this, options);
        },
        event: {
            'click .submit': 'submit'
        },
        render: function () {
            this.$el = $('<div class="table"></div>')
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