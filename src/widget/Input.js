(function (window, $) {
    var lite = window.lite;
    lite.Input = lite.Widget.extend({
        initialize: function (config) {
            lite.isObject(config) || (config = {});
            config.type = 'input';
            config.mode || (config.mode = 'trigger');
            config.$this = $('<div class="input"></div>');
            this.events = {
                'init .date': 'date',
                'init .time': 'time'
            };
            lite.Input.superclass.initialize.call(this, config);
            return this;
        },
        build: function () {
            this.$label = $('<div class="label">'+this.label+'</div>');
            this.$Input = $('<input type="text"/>');
            this.$this.append(this.$label).append(this.$Input);
            return this;
        },
        date: function () {
            console.log(this.$this.attr('class'));
            if(this.$this.hasClass('date')){
                this.$Input.datepicker({
                    format: "mm-dd-yyyy"
                })
            }
            return this;
        },
        time: function(){

        }
    })
})(window, $);
