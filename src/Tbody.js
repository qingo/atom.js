(function (window, $) {
    var lite = window.lite;
    lite.Tbody = lite.Widget.extend({
        _prepare: function (options) {
            this.type = 'tbody';
            this.$this = $('<div class="table-body clr"></div>');
            this.keys = options.keys;
            this.data = options.data;
            return this;
        },
        refresh: function(){

        },
        _render: function () {
            var html = '', keys = this.keys, data = this.data, i, j;
            for (i = 0; i < data.length; i++) {
                html += '<ul class="row clr">';
                for (j = 0; j < keys.length; j++) {
                    html += '<li class="item fl item-' + j + '">' + data[i][keys[j]] + '</li>';
                }
                html += '</ul>'
            }
            this.$this.html(html);
            return this;
        }
    })

})(window, $);


