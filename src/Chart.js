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

        }
    })
})(window, $);