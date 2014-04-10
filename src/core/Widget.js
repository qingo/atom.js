(function (window, $) {
    var lite = window.lite;
    lite.Widget = lite.Class.create({
        constructor: lite.Widget,
        initialize: function (config) {
            this.config = config;
            this.setProperties().load();
            lite.instance[this.id] = this;
            return this;
        },
        setProperties: function () {
            this.setBase()
                .setDOM()
                .setMember()
                .setData()
                .setFilter()
                .setEvents(this.config.events);
            return this;
        },
        setBase: function () {
            var config = this.config;
            this.type = config.type || 'widget';
            this.mode = config.mode || 'load';
            if (!lite.getWidget(config.id)) {
                (this.id = config.id) || lite.cid(this.type);
            } else {
                throw new Error("ID为 '" + config.id + "' 的组件已存在！");
            }
            return this;
        },
        setDOM: function () {
            var config = this.config;
            this.selector = config.selector;
            this.parent = config.parent || null;
            this.className = config.className || this.type;
            this.html = config.html || '';
            this.template = config.template || '';
            $(this.template).length && (this.template = $(this.template).html());
            if (this.selector) {
                this.$this = $(this.selector);
            } else {
                this.$this = config.$this || $('<div class="' + this.className + '"></div>');
            }
            this.$this.attr('data-widget', this.id);
            return this;
        },
        setMember: function () {
            var config = this.config;
            this.label = config.label || '';
            return this;
        },
        setData: function () {
            var config =  this.config;
            this.url = config.url || '';
            this.data = config.data || null;
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
            if (this.mode = 'load' && this.url) {
                lite.getJSON(url, function (data) {
                    that.data = data;
                    that._render()._append().delegateEvents();
                })
            } else {
                that._render()._append().delegateEvents();
            }
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