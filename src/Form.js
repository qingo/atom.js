(function (window, $) {
    var lite = window.lite;
    lite.Form = lite.Widget.extend({
        Implements: lite.observer,
        prepare: function (options) {
            this.events = {
                'init .submit': 'submit',
                'click .submit': 'submit'
            };
            this.url = options.url || '';
            this.observers = {};
            this.filter = new lite.Filter();
            return this;
        },
        render: function () {
            this.$el = $('<div class="form"></div>');
            return this;
        },
        addItem: function (type, widget) {
            var wid = new lite[type](widget);
            this.$el.append(wid.$el);
            return this;
        },
        submit: function () {
            var that = this;
            $.ajax({
                url: this.url + that.filter.toUrl(),
                cache: false,
                success: function (data) {
                    var obs = that.observers,
                        k;
                    for (k in obs) {
                        obs[k].refresh(that.url + that.filter.toUrl(), data);
                    }
                }
            });

        }
    })
})(window, $);