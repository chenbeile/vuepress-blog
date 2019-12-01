module.exports = {
  // dest: 'BC_Blog',
  base: '/vuepress-blog/',
  locales: {
    '/': {
      lang: 'zh-CN',
      // title: 'BC_Blog',
      description: 'BlueChen 的blog'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'chenbeile',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/vuepress-blog/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'Blog',
            link: '/guide/',
          },
          {
            text: '配置参考',
            link: '/config/'
          },
          {
            text: 'VUE基础',
            link: '/vue/'
          },
          {
            text: '默认主题配置',
            link: '/default-theme-config/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Blog')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'jsBasics',
        'es6',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
