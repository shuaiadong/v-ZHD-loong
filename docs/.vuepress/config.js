
module.exports = {
    // context
    base: '/v-ZHD-loong/',
    // header 文字
    title: 'Do .',
    // 网站描述
    description: '不积跬步无以至千里，不积小流无以成江海。',
    // ? 暂时未出来
    // head: ['link', { rel: 'icon', href: `../icon.png` }]
    // 端口 默认8080
    port: 3000,
    head: [
        // 头部 icon
        ['link', { rel: 'icon', href: `/logo.png` }],
    ],
    // 输出目录 默认 .vuepress/dist
    dest: 'dist',
    // // ga是谷歌推出的网站流量分析工具
    // ga: ''
    // 离线缓存
    serviceWorker: true,

    // 右侧导航
    themeConfig: {
        nav: [
            {
                text: 'ZHD',
                link: '/'
            },
                { text: 'Github', link: '/guide/' },
            //     { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: 'Dauly',
                collapsable: true,
                children: [
                    ['daily/', 'Introduction'],
                    'daily/day'
                ]
            },{
                title: '深入件出React和Redux',
                collapsable: true,
                children: [
                    ['react-redux/', 'Introduction'],
                    'react-redux/Thefirstone'    
                ]
            }
        ]
    
    },
};

