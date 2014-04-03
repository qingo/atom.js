(function (window, $) {
    var lite = window.lite;
    lite.Widget = lite.Class.create({
        constructor: lite.Widget,
        initialize: function (options) {
            this.url = options.url || '';
            this.id = options.id || lite.cid(this.type);
            this.parent = options.parent || null;
            this.className = options.className || this.type;
            this.tagName = this.tagName || 'div';
            this.$this || (this.$this = $('<' + this.tagName + ' class="' + this.type + ' clr"></' + this.tagName + '>'));
            this.filter = new lite.Filter();
            this.data = options.data || null;
            this.observers = {};
            this.setEvents(options.events).load();
            this.$this.length && (this.$this[0].lite = this);
            return this;
        },
        _render: function () {
            return this;
        },
        _append: function (parent) {
            this.parent = parent || this.parent;
            if (this.parent) {
                this.$parent = this.parent.$this || $(this.parent);
                this.$parent.append(this.$this);
            }
            return this;
        },
        load: function (filter) {
            var that = this, url;
            lite.mix(this.filter, filter);
            this.filter || (url = this.url + this.filter.toUrl);
            if (this.url) {
                lite.getJSON(url, function (data) {
                    that.data = data;
                    that._render()._append().delegateEvents();
                })
            } else {
                that._render()._append().delegateEvents();
            }
            return this;
        },
        trigger: function () {
            var k, obs = this.observers;
            for (k in obs) {
                obs[k].load(this.filter);
            }
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
                    this.$this.on(event, selector, method);
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
                widget._append(this);
            }
            return this;
        },
        addObserver: function (observer) {
            this.observers[observer.id] = observer;
        },
        getObserver: function (observerId) {
            lite.isString(observerId) || (observerId = observerId.id);
            return this.observers[observerId];
        },
        removeObserver: function (observer) {
            lite.isString(observerId) || (observerId = observerId.id);
            delete this.observers[observerId];
        },
        show: function () {
            this.$this.show();
            return this;
        },
        hide: function () {
            this.$this.hide();
            return this;
        }
    });
})(window, $);