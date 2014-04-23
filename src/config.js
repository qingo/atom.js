/**
 * @file 配置页面
 */
(function (window, $) {
    var lite = window.lite;
    lite.template = {
    };
    lite.url = '';
    lite.userRight = 15;
    lite.config = {
        nav: [
            {
                icon: '&#xe600;',
                label: '首页',
                href: 'index.html'

            },
            {
                icon: '&#xe601;',
                label: '图形南通',
                href: 'ntInMap.html'

            },
            {
                icon: '&#xe602;',
                label: '动态路况',
                href: 'dynamicTraffic.html'

            },
            {
                icon: '&#xe603;',
                label: '便民信息',
                href: 'convenientInfo.html'

            },
            {
                icon: '&#xe604;',
                label: '新闻纵览',
                href: 'http://www.ntglc.com/'

            },
            {
                icon: '&#xe605;',
                label: '咨询留言',
                href: ''

            }
        ],
        tabs: [
            {
                icon: '&#xe610;',
                label: '实时路况'
            },
            {
                icon: '&#xe612;',
                label: '施工养护'
            },
            {
                icon: '&#xe613;',
                label: '公路阻断'
            },
            {
                icon: '&#xe632;',
                label: '交通事故'
            },
            {
                icon: '&#xe641;',
                label: '其他'
            }
        ],
        tabsLabel: {
            icon: '&#xe640',
            label: '服务导航'
        }
    }

})(window, $);