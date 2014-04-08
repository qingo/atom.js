(function (window, $) {
    var lite = window.lite;
    lite.Checkbox = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'checkbox';
            lite.Checkbox.superclass.initialize.call(this, options);
            return this;
        },
        _setMember: function (options) {
            this.hasAll = options.hasAll || true;
            this.member = options.member || [];
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