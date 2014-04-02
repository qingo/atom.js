(function (window, $) {
    var lite = window.lite;
    lite.Nav = lite.Widget.extend({
        _prepare: function (options) {
            this.type = 'nav';
            this.$this = $('<ul class="nav clr"></ul>');

            return this;
        },
        _render: function () {

            return this;
        }
    })
})(window, $);