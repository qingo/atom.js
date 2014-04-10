(function (window, $) {
    var lite = window.lite;
    lite.Select = lite.Widget.extend({
        initialize: function (config) {
            this.type = 'select';
            config.$this = $('<div class="select clr"></div>');
            config.events = {
                'click .select-title': '_toggleOption',
                'click .option-item': '_hideOption'
            };
            lite.Select.superclass.initialize.call(this, config);
            return this;
        },
        build: function () {
            var i = 0,
                data = this.data,
                html = '';
            this.$label = $('<div class="select-label fl">' + this.label + '</div>');
            this.$content = $('<div class="select-cnt fl"></div>');
            this.$title = $('<div class="select-title clr" data-value="' + (data[0].id || data[0].name) + '">' + data[0].name + '</div>');
            this.$option = $('<ul class="select-option clr"></ul>');
            for (i = 0; i < data.length; i++) {
                html += '<li class="option-item" data-value="' + (data[i].id || data[i].name) + '">' + data[i].name + '</li>';
            }
            this.$option.html(html);
            this.$content.append(this.$title).append(this.$option.hide());
            this.$this.append(this.$label).append(this.$content);

            return this;
        },
        setMember: function () {
            var config = this.config;
            this.label = config.label || '';
            this.option = config.option || [];
            return this;
        },
        _toggleOption: function () {
            var id = $(this).parent().parent().attr('data-widget'),
                that = lite.getWidget(id);
            console.dir(id);
            that.$option.toggle();
        },
        _hideOption: function () {
            var id = $(this).parent().parent().parent().attr('data-widget'),
                that = lite.getWidget(id),
                index = $(this).index();
            that.$option.hide();
            console.log(index);
            console.log(that.data);
            console.log(that.data[index]);
            that.val($(this).index());
        },
        val: function (index) {
            console.log(typeof index === 'undefined');
            if (typeof index === 'undefined') {
                return this.$title.attr('data-value');
            } else {
                console.log(this.data[index]);
                this.$title.attr('data-value', this.data[index].id || this.data[index].name).html(this.data[index].name);
                return this;
            }
        }
    })

})(window, $);
