(function (window, $) {
    var lite = window.lite;
    lite.Widget = lite.Class.create({
        initialize: function (options) {
            options = options || {};
            this.prepare(options);
            this.id = options.id || lite.cid();
            this.selector = options.selector || 'body';
            this.$el = $(this.selector);
            this.render().initEvents(options.events).delegateEvents();
        },
        prepare: function (options) {
            return this;
        },
        render: function () {
            return this;
        },

        initEvents: function (events) {
            lite.mix(this.events, events);
            return this;
        },
        delegateEvents: function () {
            var key, keys, selector, event, method;
            for (key in this.events) {
                keys = key.split(/\s+/);
                event = keys[0];
                selector = keys[1];
                if (lite.isFunction(this.events[key])) {
                    method = this.events[key]
                } else {
                    method = this[this.events[key]];
                }
                if (event === 'init') {
                    method.call(this, selector);
                } else {
                    this.$el.off(event, selector, method).on(event, selector, method);
                }
            }
            return this;
        },
        unDelegateEvents: function () {
            var key, keys, selector, event, method, that = this;
            for (key in this.events) {
                keys = key.split(/\s+/);
                event = keys[0];
                selector = keys[1];
                if (lite.isFunction(this.events[key])) {
                    method = this.events[key]
                } else {
                    method = this[this.events[key]];
                }
                this.$el.off(event, selector, method).on(event, selector, method);
            }
            return this;
        }
    });
})(window, $);