(function (window, $) {
    var lite = window.lite;
    lite.Checkbox = lite.Widget.extend({
        initialize: function (config) {
            lite.isObject(config) || (config = {});
            config.type = 'checkbox';
            lite.Checkbox.superclass.initialize.call(this, config);
            return this;
        },
        setMember: function (config) {
            this.hasAll = config.hasAll || true;
            this.member = config.member || [];
            return this;
        },
        build: function () {
            var html = '<div class="option-all"></div>',
                mmb = this.member, i;
            for (i = 0; i < mmb.length; i++) {
                html+= '<div class="option-item">'+mmb[i]+'</div>'
            }
            this.$this.html(html);
        }
    })
})(window, $);