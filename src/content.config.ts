// src/content/config.ts

import { defineCollection, z } from 'astro:content';

// 1. 定义 posts 集合
const posts = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.coerce.date().optional(),
            modDate: z.coerce.date().optional(),

            // 路由相关的字段，现在是可选的（因为我们手动计算 Slug）
            categories: z.array(z.string()).default([]),
            categorySlugs: z.array(z.string()).optional(),
            tags: z.array(z.string()).default([]).optional(),
            tagSlugs: z.array(z.string()).optional(),

            // ⭐ 关键修复：恢复所有缺失的字段，以解决 ts(2339) 错误
            draft: z.boolean().default(false).optional(),
            description: z.string().optional(),
            customData: z.string().optional(),

            banner: image()
                .refine(img => Math.max(img.width, img.height) <= 4096, {
                    message: 'Width and height of the banner must less than 4096 pixels'
                })
                .optional(),

            author: z.string().optional(),
            commentsUrl: z.string().optional(),
            source: z.optional(z.object({ url: z.string(), title: z.string() })),
            enclosure: z.optional(z.object({ url: z.string(), length: z.number(), type: z.string() })),

            // ⭐ 关键修复：恢复 pin 字段
            pin: z.boolean().default(false).optional(),
        }),
    // 确保 transform 钩子被移除或注释掉
    // transform: applyTransform,
});

// 2. 定义 spec 集合
const spec = defineCollection({});

export const collections = {
    posts,
    spec,
};