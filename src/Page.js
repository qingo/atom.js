(function (window, $) {
    var lite = window.lite;
    lite.Page = lite.Widget.extend({
        prepare: function (options) {
            var that = this;
            this.userRight = options.userRight || 0;
            this.url = options.url || '';
            this.url && $.ajax({
                url: this.url,
                cache: false,
                async: false,
                success: function (data) {
                    that.userRight = data;
                }
            });
            return this;
        },
        addItem: function (type, widget) {
            var index = lite.rightIndex[widget.id];
            if (index && this.checkRight(widget.id, index)) {
                this.$el.append(widget.$el);
                widget.parent = this;
                widget.delegateEvents();

            }
            return this;
        },
        checkRight: function (id, index) {
            return !!+this.userRight.toString(2).charAt(index);
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