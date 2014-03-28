(function (window, $) {
    var lite = window.lite;
    lite.Element = lite.Widget.extend({
        _prepare: function(options){

        },
        _render: function(){
            this.label = $('<div class="label clr></div>" ')
        },

    })
})(window, $);