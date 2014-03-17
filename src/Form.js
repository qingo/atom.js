(function (window, $) {
    window.Form = Widget.extend({
        initialize: function (options) {
            Form.superclass.initialize();
            this.id = options.id;

            this.event = {
                'click .submit': 'submit'
            };
            this.render().delegateEvents();


        },
        render: function () {
            this.$el = $('<div class="form"></div>')
        },
        show: function () {

        },
        addItem: function (type, widget) {

            var wid = new window[type](widget);
            this.$el.append(wid.$el);
            return this;
        }



    })
})(window, $);