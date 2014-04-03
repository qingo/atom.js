(function (window, $) {
    var lite = window.lite;
    lite.Tabs = lite.Widget.extend({
        initialize: function (options) {
            options = options || {};
            this.type = 'tabs';
            this.tagName = 'ul';
            this.events = {
                'click .tabs-item': 'toggle'
            };
            this.head = options.head || [];
            this.$content = options.content || '';
            this.content = [];
            lite.Tabs.superclass.initialize.call(this, options);
            return this;
        },
        _render: function () {
            var html = '',
                head = this.head, i , item;
            for (i = 0; i < head.length; i++) {
                item = head[i];
                html += '<li class="tabs-item">'
                    + '<i>' + item.icon + '</i>'
                    + '<h2>' + item.title + '</h2>'
                    + '</li>';
                this.content.push(new lite.Page({
                    parent: this.$content
                }));
            }
            this.$this.html(html);
            return this;
        },
        toggle: function () {
            var that = $(arguments[0].delegateTarget)[0].lite,
                content = that.content, k;
            for (k = 0; k < content.length; i++) {
                if (k === $(this).index()) {
                    content[k].show();
                } else {
                    content[k].hide();
                }
            }
        }
    })
})(window, $);