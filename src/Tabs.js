(function (window, $) {
    var lite = window.lite;
    lite.Tabs = lite.Widget.extend({
        initialize: function (options) {
            options = options || {};
            this.type = 'tabs';
            this.$this = $('<div class="tabs fl clr"></div>');
            this.events = {
                'click .tabs-item': 'toggle'
            };
            this.head = options.head || [];
            this.current = options.current || 0;
            this.content = options.content || [];
            lite.Tabs.superclass.initialize.call(this, options);
            return this;
        },
        _render: function () {
            var html = '',
                head = this.head,
                currentClass = {
                    'true': 'tabs-current',
                    'false': ''
                }, i , item;
            var label = '<div class="tabs-label clr">'
                + '<i class="fl">' + this.label.icon + '</i>'
                + '<h3 class="fl">' + this.label.label + '</h3>'
                + '<div class="tabs-tip"></div>'
                + '</div>';
            for (i = 0; i < head.length; i++) {
                item = head[i];
                html += '<li class="tabs-item clr ' + currentClass[this.current === i] + '">'
                    + '<i class="fl">' + item.icon + '</i>'
                    + '<h3 class="fl">' + item.label + '</h3>'
                    + '</li>';
                this.content.push(new lite.Page({
                    parent: this.parent,
                    id: this.id + '-trigger-' + i,
                    className: this.id + '-trigger fr '+ currentClass[this.current === i]
                }));
            }

            html = '<ul class="tabs-content clr">' + html + '</ul>';
            this.$this.html(label + html);
            return this;
        },
        setCurrent: function (index) {
            this.current = index;
            this._render();
            return this
        },
        toggle: function () {
            var that = $(arguments[0].delegateTarget)[0].lite,
                content = that.content, i;
            for (i = 0; i < content.length; i++) {
                if (i === $(this).index()) {
                    content[i].show();
                } else {
                    content[i].hide();
                }
            }
            that.setCurrent($(this).index());
        }
    })
})(window, $);