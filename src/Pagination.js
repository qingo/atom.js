(function (window, $) {
    var lite = window.lite;
    lite.Pagination = lite.Widget.extend({
        prepare: function (options) {
            this.dataSize = options.dataSize;
            this.dataSizeInPage = options.dataSizeInPage || 10;
            this.size = Math.ceil(this.dataSize / this.dataSizeInPage);
            console.log(this.size);
            this.sizeInPage = options.SizeInPage || 10;
            this.cur = 10;
            this.startPage = this.cur;
            this.isFirst = !this.cur;
            this.isLast = !(this.size - this.cur);
            this.isPrev = !this.startPage;
            this.isNext = !(this.size - this.startPage - this.sizeInPage);
            console.log(this.size - this.startPage - this.sizeInPage);
            return this;
        },

        render: function () {
            var click = {'true': 'disabled', 'false': 'usable'};
            var html = '<ul>' +
                '<li class="fl ' + click[this.isFirst] + '">\|\<</li>' +
                '<li class="fl ' + click[this.isPrev] + '">\<\<</li>' +
                '<li class="fl ' + click[this.isFirst] + '">\<</li>';
            for (var i = this.startPage; i < this.size && i < this.startPage + this.sizeInPage; i++) {
                html += '<li class="fl ' + click[this.cur===i] + '">'+(i+1)+'</li>';
            }
            html += '<li class="fl ' + click[this.isLast] + '">\></li>' +
                '<li class="fl ' + click[this.isNext] + '">\>\></li>' +
                '<li class="fl ' + click[this.isLast] + '">\>\|</li>' +
                '<ul>';
            this.$el.append(html);
            return this;

        },
        refresh: function () {

        }
    })
})(window, $);