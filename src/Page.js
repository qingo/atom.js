(function (window, $) {
    window.Page = Widget.extend({
        initialize: function (options) {
            Page.superclass.initialize.call(this,options);
        },
        addItem: function (type, widget) {
            var index = userRight[widget.id];
            if (index && this.checkRight(widget.id,index)) {
                var wid = new window[type](widget);
                this.$el.append(wid.$el);
            }
            return this;
        },
        checkRight: function (id,index) {
            return !!+this.userRight[id].toString(2).charAt(index);
        },
        addNav: function (nav) {
            this.addItem('Nav', nav);
            return this;
        },
        addForm: function (form) {
            this.addItem('Form', form);
            return this;
        },
        addTable: function (table) {
            this.addItem('Table', table);
            return this;
        },
        addPopUp: function (popUp) {

        },
        addButton: function (btn) {

        },
        addInput: function (input) {

        },
        addSelect: function (select) {

        },
        getItem: function (id) {
        },
        getNav: function (id) {

        },
        getForm: function (id) {
            return this.members[id];
        },
        getTable: function (id) {

        },
        getPopUp: function (id) {

        },
        getButton: function (id) {

        },
        getInput: function (id) {

        },
        getSelect: function (id) {

        }

    });
})(window, $);