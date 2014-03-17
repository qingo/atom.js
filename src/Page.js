(function (window, $) {
    window.Page = Widget.extend({
        initialize: function (options) {
            Page.superclass.initialize();
            this.selector = options.selector || document;
            this.$el = $(this.selector);
            this.delegateEvents();
        },
        addItem: function (type, widget) {
            var index = userRight[widget.id];
            if (index && this.checkRight(index)) {
                var wid = new window[type](widget);
                this.$el.append(wid.$el);
            }
            return this;
        },
        checkRight: function (index) {
            return !!+this.userRight.charAt(index);
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