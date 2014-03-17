(function (window, $) {
    var lite = window.lite;

    lite.Table = lite.Widget.extend({
        initialize: function (options) {
            lite.Table.superclass.initialize.call(this, options);
        },
        prepare: function(options){
            this.events = {};
            this.header = options.header;
            this.keys = options.keys;
        },
        render: function () {
            this.$el = $('<div class="table"></div>');
            this.$header = $('<div class="table-header"></div>');
            this.$body = $('<div class="table-body"></div>');
            this.$Pagination = $('<div class="table-Pagination"></div>');
            this.createHeader().createBody().createPagination();
            return this;
        },
        refresh: function (url, data) {
            lite.isString(url) || (url = url.toUrl());
            this.createBody().createPagination();
            return this;
        },
        createHeader: function () {

            this.$el.append(this.$header);
            return this;
        },
        createBody: function () {

            this.$el.append(this.$body);
            return this;
        },
        createPagination: function () {

            this.$el.append(this.$Pagination);
            return this;
        },
        addItem: function (type, widget) {
            var wid = new lite[type](widget);
            this.$el.append(wid.$el);
            return this;
        }
    })
})(window, $);