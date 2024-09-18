import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "绘梦我的世界",
  description: "绘梦我的世界文档",
  markdown: {
    container: {
      tipLabel: ' ',
      warningLabel: ' ',
      dangerLabel: ' ',
      infoLabel: ' ',
      detailsLabel: ' '
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '加入群聊', link: '/group' },
      { text: 'MC版本库', link: 'https://bbk.endyun.ltd/' },
      { text: '友情链接', link: '/link' }
    ],
    sidebar: [
      {
        text: '概述',
        link: '/README.md'
      },
      {
        text: '公告',
        collapsed: true,
        link: '/notice/2024',
        items: [
          {
            text: '历史公告',
            collapsed: true,
            items: [
              { text: '2023', link: '/notice/2023' },
              { text: '2022', link: '/notice/2022' }
            ]
          }
        ]
      },
      {
        text: '服务器',
        collapsed: true,
        items: [
          { text: '进服流程', link: '/start' },
          { text: '服务器简介', link: '/servers/' },
          { text: '服务器状态', link: '/servers/motd' },
          { text: '服务器黑名单', link: '/servers/banlist' },
          { text: '服务器记过名单', link: '/servers/marklist' }
        ]
      },
      { text: 'MC版本库', link: 'https://bbk.endyun.ltd/' },
      {
        text: 'Minecraft中文WIKI', link: 'https://zh.minecraft.wiki/'
      },
      {
        text: '关于绘梦',
        collapsed: true,
        link: '/About',
        items: [
          { text: '加入群聊', link: '/group' },
          { text: '常见问题', link: '/FAQ' }
        ]
      },
      { text: '友情链接', link: '/link' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/HMMCDEV/Docs' }
    ],
    footer: {
      message: '绘梦我的世界',
      copyright: 'Copyright © 2020-2024'
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    returnToTopLabel: "回到顶部",
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
