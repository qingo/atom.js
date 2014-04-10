(function (window, $) {
    var lite = window.lite;

    lite.Table = lite.Widget.extend({
        initialize: function (config) {
            lite.isObject(config) || (config = {});
            config.type = 'table';
            config.$this = $('<div class="table fl"></div>');
            this.hasPagination = config.hasPagination || 'false';
            lite.Table.superclass.initialize.call(this, config);
            return this;
        },
        setMember: function(config){
            this.header = config.header;
            this.keys = config.keys;
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