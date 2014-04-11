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
        setMember: function () {
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

        },
        build: function(){
            this.$layer = $('<div class="layer"></div>');
            this.$tileLayer = $('<div class="tileLayer"></div>');
            this.$vectorLayer = $('<div class="vectorLayer"></div>');
            this.$iconLayer = $('<div class="iconLayer"></div>');
            this.$labelLayer = $('<div class="labelLayer"></div>');
            this.$popLayer = $('<div class="popLayer"></div>');
            this.$tipLayer = $('<div class="tipLayer"></div>');
            this.$default = $('<div class="default "></div>');
            this.$layer.append(this.$tileLayer)
            this.$tool = $('<div class="tool"></div>');
        }
    })
})(window, $);