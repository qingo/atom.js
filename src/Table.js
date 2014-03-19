(function (window, $) {
    var lite = window.lite;

    lite.Table = lite.Widget.extend({
        prepare: function (options) {
            this.events = {};
            this.header = options.header;
            this.keys = options.keys;
            this.useTable = options.useTable || true;
            return this;
        },
        render: function () {
            this.$el = $('<div class="table fl"></div>');
            this.$header = $('<div class="table-header fl clearfix"></div>');
            this.$body = $('<div class="table-body"></div>');
            this.$Pagination = $('<ul class="table-Pagination fl clearfix"></ul>');
            this.createHeader().createBody().addPagination();
            return this;
        },
        refresh: function (url, data) {
            console.log(url);
            lite.isString(url) || (url = url.toUrl());
            this.createBody(data).addPagination(url);
            return this;
        },
        createHeader: function () {
            var header = [
                {
                    title: '0',
                    content: ['0-0', '0-1']
                },
                {
                    title: '1',
                    content: ['1-0', '1-1']
                },
                {
                    title: '2',
                    content: ['2-0', '2-1']
                },
                {
                    title: '3',
                    content: ['3-0', '3-1']
                },
                {
                    title: '4',
                    content: ['4-0', '4-1']
                },
                {
                    title: '5',
                    content: ['5-0', {
                        title: '5-1',
                        content: ['5-1-0', '5-1-0']
                    }]
                }

            ];
            this.$header.html(create(header));
            this.$el.append(this.$header);

            function create(content) {
                var i, html = '';
                if (lite.isArray(content)) {
                    for (i = 0; i < content.length; i++) {
                        html += '<div class="item fl">' + create(content[i]) + '</div>'
                    }
                } else if (lite.isObject(content)) {
                    html += '<div class="title">' + content.title + '</div>' +
                        '<div class="row clearfix">' + create(content.content) + '</div>'
                } else {
                    html += content;
                }
                return html;
            }

            return this;
        },
        createBody: function () {
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
            this.pagination.delegateEvents();
            return this;
        }
    });

})(window, $);