module.exports = {
  title: 'Vue super flow',
  description: '快速方便实现流程图',
  port: 3200,
  home: true,
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      {text: '首页', link: '/'},
      {text: '文档', link: '/guide/'},
      {text: '示例', link: '/demo/'},
      {text: 'Github', link: 'https://github.com/caohuatao/vue-super-flow', target: '_blank'}
    ],
    sidebar: [
      {
        title: '示例',
        collapsable: false,
        children: [
          {
            title: '默认示例',
            path: '/demo/'
          },
          {
            title: '进阶示例',
            path: '/demo/super'
          }
        ]
      }
    ]
  }
}
