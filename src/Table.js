(function (window, $) {
    var lite = window.lite;

    lite.Table = lite.Widget.extend({
        Implements: lite.observer,
        _prepare: function (options) {
            this.events = {
                'click .row': 'detail'
            };
            this.header = options.header;
            this.keys = options.keys;
            this.data = options.data;
            this.header = options.header;
            this.observers = {};
            return this;
        },
        _render: function () {
            this.$el = $('<div class="table fl"></div>');
            this.$header = $('<ul class="table-header clr"></ul>');
            this.$body = $('<div class="table-body clr"></div>');
            this.$Pagination = $('<ul class="table-Pagination clr"></ul>');
            this.createHeader().createBody().addPagination();
            return this;
        },
        refresh: function (url, data) {
            lite.isString(url) || (url = url.toUrl());
            this.createBody(data).addPagination(url);
            return this;
        },
        createHeader: function () {
            var c = 0;
            this.$header.html(create(this.header));
            this.$el.append(this.$header);
            return this;

            function create(content) {
                var i, html = '';
                if (lite.isArray(content)) {
                    for (i = 0; i < content.length; i++) {
                        html += create(content[i]);
                    }
                } else if (lite.isObject(content)) {

                    html += '<li class="item fl">' +
                        '<div class="title">' + content.title + '</div>' +
                        '<ul class="row clr">' + create(content.content) + '</ul>' +
                        '</li>';
                } else {
                    html += '<li class="item fl item-' + (c++) + '">' + content + '</li>'
                }
                return html;
            }
        },
        createBody: function () {
            var html = '', keys = this.keys, data = this.data, i, j;
            for (i = 0; i < data.length; i++) {
                html += '<ul class="row clr">';
                for (j = 0; j < keys.length; j++) {
                    html += '<li class="item fl item-' + j + '">' + data[i][keys[j]] + '</li>';
                }
                html += '</ul>'
            }
            this.$body.html(html);
            this.$el.append(this.$body);
            return this;
        },
        addPagination: function (url) {
            this.pagination = new lite.Pagination({
                url: url,
                selector: this.$Pagination,
                dataSize: 230,
                SizeInPage: 10});
            this.$el.append(this.$Pagination);
            this.pagination.parent = this;
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