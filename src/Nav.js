(function (window, $) {
    var lite = window.lite;
    lite.Nav = lite.Widget.extend({
        initialize: function (options) {
            options = options || {};
            this.type = 'nav';
            this.tagName = 'ul';
            this.head = options.head || [];
            this.current = options.current || 0;
            lite.Nav.superclass.initialize.call(this, options);
            return this;
        },
        _render: function () {
            var html = '',
                head = this.head,
                currentClass = {
                    'true': 'nav-current',
                    'false': ''
                },
                i , item;
            for (i = 0; i < head.length; i++) {
                item = head[i];
                html += '<li class="nav-item nav-item-' + i + ' ' + currentClass[+this.current === i] + '">'
                    + '<a href="' + item.href + '">'
                    + '<i>' + item.icon + '</i>'
                    + '<h2>' + item.label + '</h2>'
                    + '</a>'
                    + '</li>';
            }
            this.$this.html(html);
            return this;
        },
        setCurrent: function (index) {
            this.current = index;
            this._render();
            return this
        }
    })
})(window, $);