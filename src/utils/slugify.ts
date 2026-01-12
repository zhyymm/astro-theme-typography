// src/utils/slugify.ts

export function generateSlug(text: string): string {
  if (!text) return 'undefined';

  return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')     // 替换空格为 -
      .replace(/[^\w\u4e00-\u9fa5-]+/g, '') // 💡 关键：允许字母、数字、连字符以及“中文字符”
      .replace(/--+/g, '-')     // 替换连续的 -
}