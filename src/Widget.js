(function (window, $) {
    var lite = window.lite;
    lite.Widget = lite.Class.create({
        constructor: lite.Widget,
        initialize: function (options) {
            options = options || {};
            this.id = options.id || lite.cid(this.type);
            this.parent = options.parent || null;
            console.log(this);
            this._prepare(options)._render().show().delegateEvents(options.events);
            this.$this[0].lite = this;
            return this;
        },
        _prepare: function (o) {
            return this;
        },
        _render: function () {
            return this;
        },
        show: function (parent) {
            this.parent = parent || this.parent;
            if(this.parent){
                this.$parent = this.parent.$this || $(this.parent);
                this.$parent.append(this.$this);
            }
            return this;
        },
        setEvents: function (events) {
            lite.mix(this.events, events);
            return this;
        },
        delegateEvents: function (events) {
            events || this.setEvents(events);
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
                    this.$this.off(event, selector, method).on(event, selector, method);
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
                this.$this.off(event, selector, method).on(event, selector, method);
            }
            return this;
        },
        _checkRight: function (id, index) {
            return !!+lite.userRight.toString(2).charAt(index);
        },
        addItem: function (widget) {
            var index = lite.rightIndex[widget.id];
            if (index && this._checkRight(widget.id, index)) {
                widget.show(this);
            }
            return this;
        }
    });
})(window, $);