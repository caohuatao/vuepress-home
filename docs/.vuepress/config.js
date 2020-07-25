module.exports = {
  title: 'Vue super flow',
  description: '快速方便实现流程图',
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
            title: '菜单配置',
            path: '/demo/menu'
          }
        ]
      }
    ]
  }
}
