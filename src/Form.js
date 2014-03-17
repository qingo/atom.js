(function (window, $) {
    window.Form = Widget.extend({
        initialize: function (options) {
            this.observers = [];
            Form.superclass.initialize.call(this, options);
        },
        initEvents: function (events) {
            this.events = {
                'click .submit': 'submit'
            };
        },
        render: function () {
            this.$el = $('<div class="form"></div>')

        },
        addItem: function (type, widget) {
            var wid = new window[type](widget);
            this.$el.append(wid.$el);
            return this;
        },
        submit: function () {
            var obs = this.observers,
                k;
            for(k in obs){
                obs[k].refresh();
            }
        },
        addObserver: function (observer) {


        },
        removeObserver: function (observer) {

        }
    })
})(window, $);