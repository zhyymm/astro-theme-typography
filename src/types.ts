// src/types.ts

import type { CollectionEntry } from 'astro:content';

/**
 * 定义文章集合的类型别名
 * 这样可以避免在 .astro 文件中因 JSX 解析错误而导致 astro(1002) 错误
 */
export type Post = CollectionEntry<'posts'>;