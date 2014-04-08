(function (window, $) {
    var lite = window.lite;
    lite.Nav = lite.Widget.extend({
        initialize: function (options) {
            options || (options = {});
            options.type = 'nav';
            options.$this = $('<ul class="nav"></ul>');
            this.head = options.head || [];
            this.current = options.current || 0;
            lite.Nav.superclass.initialize.call(this, options);
            return this;
        },
        build: function () {
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
            this.build();
            return this
        }
    })
})(window, $);