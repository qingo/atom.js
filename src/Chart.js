(function (window, $) {
    var lite = window.lite;
    lite.Chart = lite.Widget.extend({
        _render: function () {
            this.$this = $('<div class="Chart"></div>');
            return this;
        },
        show: function (url, data) {

        },
        refresh: function (url, data) {

        },
        addItem: function (type, widget) {
            var wid = new window[type](widget);
            this.$this.append(wid.$this);
            return this;
        }
    })
})(window, $);