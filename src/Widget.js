(function (window, $) {
    window.Widget = Class.create({
        initialize: function (options) {
            this.prepare();
            this.id = options.id;
            this.selector = options.selector || document;
            this.$el = $(this.selector);
            this.render().initEvents(options.events).delegateEvents();
        },
        prepare: function(){

        },
        render: function () {

        },

        initEvents: function (events) {
            util.mix(this.events,events);
        },
        delegateEvents: function () {
            var key, keys, selector, event, method;
            for (key in this.events) {
                keys = key.split(/\s+/);
                event = keys[0];
                selector = keys[1];
                if (util.isFunction(this.events[key])) {
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
                if (util.isFunction(this.events[key])) {
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