(function (window, $) {
    var lite = window.lite;
    lite.Select = lite.Widget.extend({
        _prepare: function (options) {
            this.type = 'select';
            this.$this = $('<div class="select clr"></div>');
            this.events = {
                'click .select-title': '_showOption',
                'click .select-item': '_hideOption'
            };
            this.isLoad = false;
            this.data = options.data;
            return this;
        },
        _render: function () {
            var i = 0,
                data = this.data,
                html = '';
            this.$label = $('<div class="label clr>'+this.label+'</div>"');
            this.$title = $('<div class="select-title clr"></div>');
            this.$option = $('<ul class="select-option clr"></ul>');
            for (i = 0; i < data.length; i++) {
                html += '<li class="select-item" data-value="' + data[i].id + '">' + data[i].name + '</li>';
            }
            this.$option.html(html);
            this.$this.append(this.$label).append(this.$title).append(this.$option);
            return this;
        },
        _showOption: function () {


        },
        _hideOption: function () {

        }
    })

})(window, $);
