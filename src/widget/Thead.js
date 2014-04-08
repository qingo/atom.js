(function (window, $) {
    var lite = window.lite;
    lite.Thead = lite.Widget.extend({
        initialize: function (options) {
            options = options || {};
            this.type = 'thead';
            this.$this = $('<ul class="table-header clr"></ul>');
            this.content = options.header;
            lite.Thead.superclass.initialize.call(this,options);
            return this;
        },
        build: function () {
            var c = 0;
            this.$this.html(create(this.content));
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
        }
    })

})(window, $);