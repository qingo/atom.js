(function (window, $) {
    var lite = window.lite;
    lite.Map = lite.Widget.extend({
        initialize: function (options) {
            options = options || {};
            this.type = 'map';
            this.$this = $('<div class="map fl"></div>');
            lite.Map.superclass.initialize.call(this,options);
            return this;
        },
        show: function (url, data) {

        },
        refresh: function (url, data) {

        }
    })
})(window, $);