(function (window, $) {
    var lite = window.lite;
    lite.Button = lite.Widget.extend({
        initialize: function (options) {
            lite.isObject(options) || (options = {});
            options.type = 'button';
            this.events = {
                'click .submit': 'trigger'
            };
            lite.Button.superclass.initialize.call(this, options);
            return this;
        },
        build: function () {
            this.$this.html(this.label);
            return this;
        },
        trigger: function(){
            var id = $(this).attr('data-widget'),
                widget = lite.getWidget(id),
                parent = widget.parent;
            lite.getJSON(this.url+parent.filter.toUrl,function(){

            });
        }
    })
})(window, $);