(function (window, $) {
    window.Table = Widget.extend({
        initialize: function (options) {
            Table.superclass.initialize.call(this, options);
        },
        prepare: function(){
            this.events = {};
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
            util.isString(url)
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
            var wid = new window[type](widget);
            this.$el.append(wid.$el);
            return this;
        }
    })
})(window, $);