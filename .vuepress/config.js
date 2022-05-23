module.exports = {
  title: 'airfire-blogs',
  description: "liuxu's blog",
  dest: 'public',
  base: '/blogs/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: 'Docs',
        icon: 'reco-message',
        items: [
          {
            text: 'vuepress-reco',
            link: '/docs/theme-reco/'
          }
        ]
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/recoluan',
            icon: 'reco-github'
          }
        ]
      }
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api']
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: 'Category'
      },
      tag: {
        location: 3,
        text: 'Tag'
      }
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar:
          'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com'
      }
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'liuxu',
    authorAvatar: '/avatar.png',
    record: 'xxxx',
    startYear: '2017'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    // 公告栏
    [
      '@vuepress-reco/vuepress-plugin-bulletin-popover',
      {
        title: '公告',
        body: [
          {
            type: 'title',
            content: '欢迎加我的QQ/vx 🎉🎉🎉',
            style: 'text-aligin: center;'
          },
          {
            type: 'text',
            content: 'QQ/VX：1349320519',
            style: 'text-align: center;'
          },
          {
            type: 'text',
            content: '喜欢的主题特效可以去个人信息',
            style: 'text-align: center;'
          },
          {
            type: 'text',
            content: '友链或疑问均可在留言板给我留言',
            style: 'text-align: center;'
          }
        ],
        footer: [
          {
            type: 'button',
            text: '打赏',
            link: '/blog/donate'
          }
        ]
      }
    ],
    // 背景音乐
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          // 本地文件示例
          {
            name: 'Vibrato',
            artist: 'stellar',
            url: './public/music/Stellar-Vibrato.mp3',
            cover: './public/avatar.png'
          }
          // 网络文件示例
          // {
          //   name: '강남역 4번 출구',
          //   artist: 'Plastic / Fallin` Dild',
          //   url: 'https://assets.smallsunnyfox.com/music/2.mp3',
          //   cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
          // },
        ]
      }
    ],
    // 鼠标点击特效
    [
      'vuepress-plugin-cursor-effects',
      {
        size: 2, // size of the particle, default: 2
        shape: 'circle', // shape of the particle, default: 'star'
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
    [
      'sakura',
      {
        num: 20, // 默认数量
        show: true, //  是否显示
        zIndex: -1, // 层级
        img: {
          replace: false, // false 默认图 true 换图 需要填写httpUrl地址
          httpUrl: '...' // 绝对路径
        }
      }
    ]
  ]
}
