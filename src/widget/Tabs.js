(function (window, $) {
    var lite = window.lite;
    lite.Tabs = lite.Widget.extend({
        initialize: function (config) {
            config || (config = {});
            config.type = 'tabs';
            config.$this = $('<div class="tabs fl clr"></div>');
            config.events = {
                'click .tabs-item': 'toggle'
            };
            lite.Tabs.superclass.initialize.call(this, config);
            return this;
        },
        setMember: function (config) {
            config = config || this.config;
            this.head = config.head || [];
            this.label = config.label;
            this.current = config.current || 0;
            this.content = config.content || [];
            return this;
        },
        build: function () {
            var html = '',
                head = this.head,
                content = this.content,
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
            }
            for (i = 0; i < content.length; i++) {
                if (this.current === i) {
                    this.content[i].show()
                } else {
                    this.content[i].hide();
                }
            }
            html = '<ul class="tabs-content clr">' + html + '</ul>';
            this.$this.html(label + html);
            return this;
        },
        setCurrent: function (index) {
            this.current = index;
            this.build();
            return this
        },
        addContent: function (widget) {
            this.content.push(widget);
            return this;
        },
        toggle: function () {
            var id = $(arguments[0].delegateTarget).attr('data-widget'),
                that = lite.getWidget(id),
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