// src/middleware.ts

import { defineMiddleware } from 'astro:middleware'
import { themeConfig } from '~/.config'
import { LANGUAGES } from '~/i18n.ts'

// ⭐ 修复 ts(7053) 错误：使用 keyof typeof LANGUAGES 进行类型断言
// 这告诉 TypeScript，locale 必须是 LANGUAGES 对象中存在的键之一。
type LanguageKey = keyof typeof LANGUAGES;

export const onRequest = defineMiddleware(async (context, next) => {
  // 确保 locale 在赋值时被断言为有效的键类型
  const locale = themeConfig.appearance.locale as LanguageKey;

  // 使用断言的 locale 访问 LANGUAGES，解决 ts(7053)
  const localeTranslate = LANGUAGES[locale];

  // 获取 localeTranslate 的键类型
  type TranslateKey = keyof typeof localeTranslate;

  // ⭐ 修复 ts(2677) 错误：确保类型谓词与索引签名匹配
  function validateKey(key: string): key is TranslateKey {
    // 运行时检查 key 是否是 localeTranslate 的属性
    return key in localeTranslate;
  }

  // 为 context.locals.translate 添加明确的类型定义
  context.locals.translate = (key: string, param?: string | number) => {
    if (!validateKey(key))
      return key

    // 访问时，TypeScript 已经知道 key 是 TranslateKey 类型
    const translation = localeTranslate[key];

    if (!param) {
      return translation;
    }

    // 如果翻译包含占位符 %d，进行替换
    return translation.replace('%d', param.toString());
  }
  return next()
})