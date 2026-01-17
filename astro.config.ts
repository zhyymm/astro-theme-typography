import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import { defineConfig } from 'astro/config'
import robotsTxt from 'astro-robots-txt'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import UnoCSS from 'unocss/astro'
import devtoolsJson from 'vite-plugin-devtools-json'
import pagefind from "astro-pagefind" // ✅ 恢复导入
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
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
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
    pagefind(), // ✅ 恢复集成
  ],
})