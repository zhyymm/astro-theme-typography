import { pinyin } from 'pinyin-pro';

export function generateSlug(text: string): string {
  if (!text) return 'undefined';

  // 1. 将中文转换为拼音（例如：巴利三藏 -> ba-li-san-zang）
  const pinyinText = pinyin(text, { toneType: 'none', type: 'array' }).join('-');

  // 2. 标准 Slug 处理
  return pinyinText
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '') // 移除所有非字母数字和横杠
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
}