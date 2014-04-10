(function (window, $) {
    var lite = window.lite, that;
    lite.Tbody = lite.Widget.extend({
        Implements: lite.observer,
        initialize: function (config) {
            this.type = 'tbody';
            this.$this = $('<div class="table-body clr"></div>');
            this.events = {
                'click .row': 'submit'
            };
            this.url = config.url || '';
            this.keys = config.keys;
            this.data = config.data;
            this.observers = {};
            that = this;
            lite.Tbody.superclass.initialize.call(this,config);
            return this;
        },
        build: function () {
            var html = '',
                keys = this.keys,
                data = this.data, i, j;
            for (i = 0; i < data.length; i++) {
                html += '<ul class="row clr" data-id="' + data[i]['id'] + '">';
                for (j = 0; j < keys.length; j++) {
                    html += '<li class="item fl item-' + j + '">' + data[i][keys[j]] + '</li>';
                }
                html += '</ul>'
            }
            this.$this.html(html);
            return this;
        },
        refresh: function (data) {
            this.data = data;
            this.build();
            return this;
        },
        submit: function () {
            var id = $(this).attr('data-id'),
                url = that.url + '?id=' + id;
            lite.getJSON(url, function (data) {
                var obs = that.observers,
                    k;
                for (k in obs) {
                    obs[k].refresh(url, data);
                }
            })
        }
    })

})(window, $);


