(function (window, $) {
    window.Table = Widget.extend({
        initialize: function (options) {
            Table.superclass.initialize.call(this, options);
        },
        event: {
            'click .submit': 'submit'
        },
        render: function () {
            this.$el = $('<div class="table"></div>');
            this.$header = $('<div class="table-header"></div>');
            this.$body = $('<div class="table-body"></div>');
            this.$Pagination = $('<div class="table-Pagination"></div>');
        },
        show: function (url, data) {

        },
        refresh: function (url, data) {


        },
        createHeader: function () {

        },
        createBody: function () {

        },
        createPagination: function () {

        },
        addItem: function (type, widget) {
            var wid = new window[type](widget);
            this.$el.append(wid.$el);
            return this;
        }
    })
})(window, $);