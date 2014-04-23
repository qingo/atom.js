/**
 * @file 权限配置页面
 * @desc 组件ID与组件相对应
 */
(function(window){
    var lite = window.lite;
    lite.rightIndex = {
        'table': 2,
        'form' : 3,
        'test': 0
    };
    lite.url && lite.getJSON(lite.url, function (data) {
            lite.userRight = data;
        }, false)
})(window);