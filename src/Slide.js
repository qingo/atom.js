(function($,window){
    lite.Slide = lite.Widget.extend({
        initialize: function(options){
            this.type = 'slide';

            lite.Slide.superclass.initialize.call(this,options);
            return this;
        },
        _render: function(){

            return this;
        }
    })
})($,window);