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
         * @param {object} config
         * @param {String} config.userRight
         * @param {String} config.url
         * @returns {window.lite.Page}
         */
        initialize: function (config) {
            lite.isObject(config) || (config = {});
            config.type = 'page';
            lite.Page.superclass.initialize.call(this, config);
            return this;
        }
    });
})(window, $);