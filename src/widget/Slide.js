(function($,window){
    lite.Slide = lite.Widget.extend({
        initialize: function(config){
            config || (config = {});
            config.type = 'slide';
            lite.Slide.superclass.initialize.call(this,config);
            return this;
        },
        build: function(){

            return this;
        }
    })
})($,window);