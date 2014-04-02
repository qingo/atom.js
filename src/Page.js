/**
 * @file Page
 * @author qingo
 * @desc 在页面建立lite.js的挂载点，作为页面内其他模块的挂载点，初始化页面。
 * 一般一个页面需要只需要一个page对象，并设置权限相关的参数。
 */
(function (window, $) {
    var lite = window.lite;
    /**
     * @name Page
     * @class 在页面建立lite的挂载点
     * @constructor
     * @extends Widget
     * @memberof lite
     * @type {void|*}
     * @example
     *
     */
    lite.Page = lite.Widget.extend({
        /**
         * @method lite.Page#_prepare
         * @desc Page的圆形方法_prepare主要是用来设置权限的，其中lite对象上的userRight用来存放整个页面和权限相关的参数
         * @param {object} options
         * @param {String} options.userRight
         * @param {String} options.url
         * @returns {window.lite.Page}
         */
        initialize: function (options) {
            this.type = 'page';
            lite.userRight = options.userRight || 0;
            this.$this = $(document.body);
            this.url = options.url || '';
            this.isLoad = options.url;
            lite.Page.superclass.initialize.call(this, options);
            return this;
        },
        load: function () {
            var that = this,
                isLoad = this.isLoad || false;
            if (isLoad) {
                lite.getJSON(this.url, function (data) {
                    that.data = data;
                    that._render()._append().delegateEvents();
                }, false)
            } else {
                that._render()._append().delegateEvents();
            }
            return this;
        }
    });
})(window, $);