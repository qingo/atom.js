(function (window, $) {
    var lite = window.lite;
    lite.Widget = lite.Class.create({
        constructor: lite.Widget,
        initialize: function (options) {
            this._setProperties(options).load();
            lite.instance[this.id] = this;
            return this;
        },
        _setProperties: function (options) {
            this._setBase(options)
                ._setDOM(options)
                ._setMember(options)
                ._setData(options)
                .setFilter()
                .setEvents(options.events);
            return this;
        },
        _setBase: function (options) {
            this.type = options.type || 'widget';
            if (!lite.getWidget(options.id)) {
                (this.id = options.id) || lite.cid(this.type);
            } else {
                throw new Error("ID为 '" + options.id + "' 的组件已存在！");
            }
            return this
        },
        _setDOM: function (options) {
            this.selector = options.selector;
            this.parent = options.parent || null;
            this.className = options.className || this.type;
            this.html = options.html || '';
            this.template = options.template || '';
            $(this.template).length || (this.template = $(this.template).length.html());
            if (this.selector) {
                this.$this = $(this.selector);
            } else {
                this.$this = options.$this || $('<div class="' + this.className + '"></div>');
            }
            this.$this.attr('data-widget', this.id);
            return this;
        },
        _setMember: function (options) {
            this.label = options.label || '';
            return this;
        },
        _setData: function (options) {
            this.url = options.url || '';
            this.data = options.data || null;
            return this;
        },
        setEvents: function (events) {
            this.events || (this.events = {});
            lite.mix(this.events, events);
            return this;
        },
        setFilter: function () {
            this.filter = new lite.Filter();
            return this;
        },
        _render: function () {
            /**
             * widget内html的构造方式一共有三种
             * 第一种：如果html属性存在，直接加载html到$this上
             * 第二种：如果template属性存在，渲染template模板然后加载到$this上
             * 第三种：通过组建自定义的build函数创建组建
             */
            if (this.html) {
                this.$this.html(this.html);
            } else if (this.template) {

            } else {
                this.build();
            }
            return this;
        },
        build: function () {

        },
        _append: function (parent) {
            var index = lite.rightIndex[this.id];
            if (index || this._checkRight(index)) {
                this.parent = parent || this.parent;
                if (this.parent) {
                    this.$parent = this.parent.$this || $(this.parent);
                    this.$parent.append(this.$this);
                }
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
        _checkRight: function (index) {
            if (typeof index === 'undefined') return true;

            return !!+lite.userRight.toString(2).charAt(index);
        },
        addItem: function (widget) {
            if (typeof widget === 'undefined') return null;
            var index = lite.rightIndex[widget.id],
                type = widget.type.toLowerCase().replace(/\w/, function ($1) {
                    return $1.toUpperCase()
                });
            if (!(widget instanceof lite.Widget) && type) {
                widget.parent = this;
                new lite[type](widget);
            } else {
                if (index && this._checkRight(widget.id, index)) {
                    widget._append(this);
                }
            }

            return this;
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