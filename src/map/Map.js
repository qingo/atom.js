(function (window, $) {
    var lite = window.lite;
    lite.Map = lite.Widget.extend({

        initialize: function (config) {
            lite.isObject(config) || (config = {});
            this.type = 'map';
            config.$this = $('<div class="map"></div>');
            lite.Map.superclass.initialize.call(this, config);
            return this;
        },
        setMember: function (config) {
            this.zIndex = 10000;
            this.pos = {"x": 0, "y": 0};
            this.size = {"width": 0, "height": 0};
            this.modules = {};
            this.location = new lite.Location();
            this.controls = {};
            this.layer = {};
            this.hendlers = {};
            this.view = {};
            this.mode = 0;
            this.menu = {};
            this.tip = {};

        }
    })
})(window, $);