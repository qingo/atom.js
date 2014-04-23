(function (window, $) {
    var lite = window.lite;

    lite.Table = lite.Widget.extend({
        /**
         * @name Table
         * @Class 表格组件类
         * @memberof lite
         * @extend lite.Widget
         * @param {object} config
         * @returns {lite.Widget}
         */
        initialize: function (config) {
            lite.isObject(config) || (config = {});
            config.type = 'table';
            config.$this = $('<div class="table fl"></div>');
            this.hasPagination = config.hasPagination || 'false';
            lite.Table.superclass.initialize.call(this, config);
            return this;
        },
        /**
         * @name lite.Table#setMember
         * @desc 设置成员属性
         */
        setMember: function(){
            var config = this.config;
            this.header = config.header;
            this.keys = config.keys;
            return this;
        },
        /**
         * @name lite.Table#build
         * @desc Table组件的构建者
         * @returns {window.lite.Table}
         */
        build: function () {
            this.thead = new lite.Thead({
                parent: this,
                header: this.header
            });
            this.tbody = new lite.Tbody({
                parent: this,
                keys: this.keys,
                data: this.data
            });
            if (this.hasPagination) this.pagination = new lite.Pagination({
                parent: this,
                url: '',
                dataSize: 230,
                SizeInPage: 10
            });
            return this;
        },
        /**
         * @name lite.Table#refresh
         * @desc 刷新表格
         * @param url
         * @param data
         * @returns {window.lite.Table}
         */
        refresh: function (url, data) {
            lite.isString(url) || (url = url.toUrl());
            this.tbody.refresh(data);
            this.pagination.refresh(url);
            return this;
        }
    });

})(window, $);