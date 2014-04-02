(function (window, $) {
    var lite = window.lite, that;

    lite.Table = lite.Widget.extend({
        initialize: function (options) {
            options = options || {};
            that = this;
            this.type = 'table';
            this.$this = $('<div class="table fl"></div>');
            this.header = options.header;
            this.keys = options.keys;
            this.data = options.data;
            this.hasPagination = options.hasPagination || 'false';
            lite.Table.superclass.initialize.call(this, options);
            return this;
        },
        _render: function () {
            this.thead = new lite.Thead({
                parent: this,
                header: this.header
            });
            this.tbody = new lite.Tbody({
                parent: this,
                keys: this.keys,
                data: this.data
            });
            if (this.hasPagination) this.pagination = new lite.Pagination({
                parent: this,
                url: '',
                dataSize: 230,
                SizeInPage: 10
            });
            return this;
        },
        refresh: function (url, data) {
            lite.isString(url) || (url = url.toUrl());
            this.tbody.refresh(data);
            this.pagination.refresh(url);
            return this;
        }
    });

})(window, $);