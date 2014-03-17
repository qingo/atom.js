(function (window, $) {
    window.Form = Widget.extend({
        initialize: function (options) {
            this.observers = {};
            Form.superclass.initialize.call(this, options);
        },
        initEvents: function (events) {
            this.events = {
                'init .submit': 'submit',
                'click .submit': 'submit'
            };
        },
        initParameter: function () {
            this.parameters = new Parameter();
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
            var that = this;
            $.ajax({
                url: this.url,
                cache: false,
                success: function (data) {
                    var obs = that.observers,
                        k;
                    for (k in obs) {
                        obs[k].refresh(that.url + that.parameters.toUrl(), data);
                    }
                }
            });

        },
        setParameter: function () {

        },
        addObserver: function (observer) {
            this.observers[observer.id] = observer;
        },
        getObserver: function (observerId) {
            util.isString(observerId) || (observerId = observerId.id);
            return this.observers[observerId];
        },
        removeObserver: function (observer) {
            util.isString(observerId) || (observerId = observerId.id);
            delete this.observers[observerId];
        }
    })
})(window, $);