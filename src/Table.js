(function (window, $) {
    var lite = window.lite;

    lite.Table = lite.Widget.extend({
        Implements: lite.observer,
        _prepare: function (options) {
            this.type = 'table';
            this.$this = $('<div class="table fl"></div>');
            this.events = {
                'click .row': 'detail'
            };
            this.header = options.header;
            this.keys = options.keys;
            this.data = options.data;
            this.observers = {};
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
            this.pagination = new lite.Pagination({
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
        },
        detail: function () {
            var that = this;
            $.ajax({
                url: this.url + that.filter.toUrl(),
                cache: false,
                success: function (data) {
                    var obs = that.observers,
                        k;
                    for (k in obs) {
                        obs[k].refresh(that.url + that.filter.toUrl(), data);
                    }
                }
            });
        }
    });

})(window, $);