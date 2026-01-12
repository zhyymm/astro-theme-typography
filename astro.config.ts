import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import swup from '@swup/astro'
import robotsTxt from 'astro-robots-txt'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import UnoCSS from 'unocss/astro'
import devtoolsJson from 'vite-plugin-devtools-json'
import { themeConfig } from './src/.config'

export default defineConfig({
  site: themeConfig.site.website,
  prefetch: true,
  base: '/',

  trailingSlash: 'always',

  build: {
    format: 'directory',
  },

  vite: {
    plugins: [
      // @ts-ignore
      devtoolsJson(),
    ],
  },
  markdown: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeKatex,
    ],
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
  integrations: [
    UnoCSS({ injectReset: true }),
    mdx({}),
    robotsTxt(),
    sitemap(),
    // swup({
    //   theme: false,
    //   animationClass: 'transition-swup-',
    //   cache: true,
    //   preload: true,
    //   accessibility: true,
    //   smoothScrolling: true,
    //   updateHead: true,
    //   updateBodyClass: true,
    // }), // ⭐ 注意：这里原本多出了一个 }), 现在已经包含在注释里了
  ],
})