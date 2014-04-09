(function (window, $) {
    var lite = window.lite;

    lite.Table = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'table';
            options.$this = $('<div class="table fl"></div>');
            this.hasPagination = options.hasPagination || 'false';
            lite.Table.superclass.initialize.call(this, options);
            return this;
        },
        _setMember: function(options){
            this.header = options.header;
            this.keys = options.keys;
        },
        build: function () {
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