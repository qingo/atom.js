(function (window, $) {
    var lite = window.lite, that;
    lite.Pagination = lite.Widget.extend({
        /**
         * @name Pagination
         * @Class 表格组件类
         * @memberof lite
         * @extend lite.Widget
         * @param {object} config
         * @returns {lite.Widget}
         */
        initialize: function (config) {
            that = this;
            this.type = 'pagination';
            this.$this = $('<ul class="table-pagination clr"></ul>');
            this.events = {
                'click .usable': 'submit'
            };
            lite.Pagination.superclass.initialize.call(this,config);
            return this;
        },
        /**
         * @method lite.Pagination#setMember
         * @desc 设置组件成员
         * @returns {window.lite.Pagination}
         */
        setMember: function () {
            var config = this.config;
            this.dataSize = +config.dataSize;
            this.dataSizeInPage = +config.dataSizeInPage || 10;
            this.size = Math.ceil(this.dataSize / this.dataSizeInPage);
            this.sizeInPage = +config.SizeInPage || 10;
            this.cur = +config.cur || 0;
            this.startPage = Math.floor(this.cur / 10) * 10;
            this.isFirst = !this.cur;
            this.isLast = !(this.size - this.cur > 1);
            this.isPrev = !this.startPage;
            this.isNext = !(this.size - this.startPage - this.sizeInPage > 0);
            return this;
        },
        /**
         * @method lite.Pagination#build
         * @desc 构建分页组件
         * @returns {window.lite.Pagination}
         */
        build: function () {
            var click = {'true': 'disabled', 'false': 'usable'},
                isCurrent = {'true': 'current', 'false': 'usable'};
            var html =
                '<li class="item fl ' + click[this.isFirst] + '" data-index="0">\|\<</li>' +
                    '<li class="item fl ' + click[this.isPrev] + '" data-index="-10">\<\<</li>' +
                    '<li class="item fl ' + click[this.isFirst] + '" data-index="-1">\<</li>';
            for (var i = this.startPage; i < this.size && i < this.startPage + this.sizeInPage; i++) {
                html += '<li class="item fl ' + isCurrent[this.cur === i] + '" data-index="' + i + '">' + (i + 1) + '</li>';
            }
            html += '<li class="item fl ' + click[this.isLast] + '" data-index="+1">\></li>' +
                '<li class="item fl ' + click[this.isNext] + '" data-index="+10">\>\></li>' +
                '<li class="item fl ' + click[this.isLast] + '" data-index="' + (this.size - 1) + '">\>\|</li>';
            this.$this.html(html);
            return this;
        },
        /**
         * @name lite.Pagination#refresh
         * @desc 刷新
         * @param url
         * @returns {window.lite.Pagination}
         */
        refresh: function (url) {
            var config = this.config;
            url || (this.url = url);
            config.cur = 0;
            this.setMember().build();
            return this;
        },
        /**
         * @name lite.Pagination#submit
         * @desc 提交
         */
        submit: function () {
            var index = $(this).attr('data-index'),
                isVector = /\+|\-/.test(index),
                vector = +index;
            if (isVector) {
                if (vector === 1 || vector === -1) {
                    index = vector + that.cur;
                } else {
                    index = vector + that.startPage;
                }
            }
            this.config.cur = index
            that.setMember().build();
            lite.getJSON(this.url, function (data) {
                var obs = that.observers,
                    k;
                for (k in obs) {
                    obs[k].refresh(url, data);
                }
            })
        }
    })
})(window, $);