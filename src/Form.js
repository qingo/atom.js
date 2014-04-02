(function (window, $) {
    var lite = window.lite, that;
    lite.Form = lite.Widget.extend({
        initialize: function (options) {
            that = this;
            this.type = 'form';
            this.$this = $('<div class="form"></div>');
            this.events = {
                'init .submit': 'trigger',
                'click .submit': 'trigger'
            };
            this.observers = {};
            this.filter = new lite.Filter();
            lite.Form.superclass.initialize.call(this, options);
            return this;
        },
        _render: function () {
            return this;
        },
        addItem: function (widget) {
            this.superclass.addItem(widget);
            this.filter.add(widget);
            return this;
        }
    })
})(window, $);