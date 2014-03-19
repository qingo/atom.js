(function (window, $) {
    var lite = window.lite;
    lite.Pagination = lite.Widget.extend({
        Implements: lite.observer,
        prepare: function (options) {
            this.events = {
                'click .usable': 'go'
            };
            this.url = options.url || '';
            this.setProperties(options.dataSize, options.cur, options.dataSizeInPage, options.SizeInPage);
            return this;
        },
        setProperties: function (dataSize, cur, dataSizeInPage, SizeInPage) {
            this.dataSize = +dataSize;
            this.dataSizeInPage = +dataSizeInPage || 10;
            this.size = Math.ceil(this.dataSize / this.dataSizeInPage);
            this.sizeInPage = +SizeInPage || 10;
            this.cur = +cur || 0;
            this.startPage = Math.floor(this.cur / 10) * 10;
            this.isFirst = !this.cur;
            this.isLast = !(this.size - this.cur > 1);
            this.isPrev = !this.startPage;
            this.isNext = !(this.size - this.startPage - this.sizeInPage > 0);
            return this;
        },
        render: function () {
            var click = {'true': 'disabled', 'false': 'usable'},
                isCurrent = {'true': 'current', 'false': 'usable'};
            var html =
                '<li class="fl ' + click[this.isFirst] + '" data-index="0">\|\<</li>' +
                    '<li class="fl ' + click[this.isPrev] + '" data-index="-10">\<\<</li>' +
                    '<li class="fl ' + click[this.isFirst] + '" data-index="-1">\<</li>';
            for (var i = this.startPage; i < this.size && i < this.startPage + this.sizeInPage; i++) {
                html += '<li class="fl ' + isCurrent[this.cur === i] + '" data-index="' + i + '">' + (i + 1) + '</li>';
            }
            html += '<li class="fl ' + click[this.isLast] + '" data-index="+1">\></li>' +
                '<li class="fl ' + click[this.isNext] + '" data-index="+10">\>\></li>' +
                '<li class="fl ' + click[this.isLast] + '" data-index="' + (this.size - 1) + '">\>\|</li>';
            this.$el.html(html);
            return this;

        },
        go: function () {
            var that = $(arguments[0].delegateTarget)[0].lite;
            var index = $(this).attr('data-index'),
                isVector = /\+|\-/.test(index),
                vector = +index;
            if (isVector){
                if(vector === 1 || vector === -1){
                    index = vector + that.cur;
                }else{
                    index = vector + that.startPage;
                }
            }
            that.setProperties(that.dataSize, index, that.dataSizeInPage, that.sizeInPage).render();
        }
    })
})(window, $);