(function (window, $) {
    var lite = window.lite;
    lite.Button = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'button';
            options.mode || (options.mode = 'trigger');
            this.events = {
                'click .add': 'add',
                'click .delete': 'del',
                'click .submit': 'submit',
                'click .save': 'save'
            };
            lite.Button.superclass.initialize.call(this, options);
            return this;
        },
        build: function () {
            this.$this.html(this.label);
            return this;
        },
        add: function () {
            var id = $(this).attr('data-widget'),
                widget = lite.getWidget(id),
                parent = widget.parent,
                obs = parent.observers,
                filter = parent.filter, i;
            lite.getJSON(this.url + filter.toUrl, function (data) {
                lite.isString(data) && (data = $.parseJSON(data));
                if (data.status) {
                    for (i = 0; i < obs.length; i++)obs.load(filter);
                } else {
                    alert(data.message);
                }
            });
        },
        submit: function () {
            var id = $(this).attr('data-widget'),
                widget = lite.getWidget(id),
                parent = widget.parent,
                obs = parent.observers,
                filter = parent.filter, i;
            lite.getJSON(this.url + filter.toUrl, function (data) {
                lite.isString(data) && (data = $.parseJSON(data));
                if (data.status) {
                    for (i = 0; i < obs.length; i++)obs.load(filter);
                } else {
                    alert(data.message);
                }
            });
        },
        del: function () {
            var id = $(this).attr('data-widget'),
                widget = lite.getWidget(id),
                parent = widget.parent,
                obs = parent.observers,
                filter = parent.filter, i;
            lite.getJSON(this.url + filter.toUrl, function (data) {
                lite.isString(data) && (data = $.parseJSON(data));
                if (data.status) {
                    for (i = 0; i < obs.length; i++)obs.load(filter);
                } else {
                    alert(data.message);
                }
            });
        },
        save: function () {
            var id = $(this).attr('data-widget'),
                widget = lite.getWidget(id),
                parent = widget.parent,
                obs = parent.observers,
                filter = parent.filter, i;
            lite.getJSON(this.url + filter.toUrl, function (data) {
                lite.isString(data) && (data = $.parseJSON(data));
                if (data.status) {
                    for (i = 0; i < obs.length; i++)obs.load(filter);
                } else {
                    alert(data.message);
                }
            });
        }
    })
})(window, $);