import type { ThemeConfig } from '~/types'

// This is the default configuration for the template, please do not modify it directly.
// You can override this configuration in the `.config/user.ts` file.

export const defaultConfig: ThemeConfig = {
  site: {
    title: '福智双修',
    subtitle: '原始佛教的宁静之旅',
    author: '福智双修',
    description: '本网站致力于弘扬原始佛教正法，以四圣谛、八正道、三法印为核心，忆念释迦牟尼佛的原始教导，行于无常、苦、无我之道，趣向涅槃寂静。',
    website: 'https://fzsx.de5.net/',
    pageSize: 5,
    socialLinks: [

    ],
    navLinks: [
      {
        name: 'Posts',
        href: '/',
      },
      {
        name: 'Archive',
        href: '/archive',
      },
      {
        name: 'Categories',
        href: '/categories',
      },
      {
        name: 'About',
        href: '/about',
      },
    ],
    categoryMap: [{ name: 'fuzhi', path: 'fuzhi' }],
    footer: [
      '© %year ','All Rights Reserved. by <a target="_blank" href="https://fzsx.de5.net/">福智双修</a>',

    ],
  },
  appearance: {
    theme: 'system',
    locale: 'zh-cn',
    colorsLight: {
      primary: '#2e405b',
      background: '#ffffff',
    },
    colorsDark: {
      primary: '#FFFFFF',
      background: '#232222',
    },
    fonts: {
      header:
        '"HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif',
      ui: '"Source Sans Pro","Roboto","Helvetica","Helvetica Neue","Source Han Sans SC","Source Han Sans TC","PingFang SC","PingFang HK","PingFang TC",sans-serif',
    },
  },
  seo: {
    twitter: '@moeyua13',
    meta: [],
    link: [],
  },
  rss: {
    fullText: true,
  },
  comment: {

    // disqus: { shortname: "typography-astro" },
  },
  analytics: {
    googleAnalyticsId: '',
    umamiAnalyticsId: '',
  },
  latex: {
    katex: false,
  },
}
