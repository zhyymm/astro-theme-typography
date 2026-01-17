import { defineCollection, z } from 'astro:content';

// 1. 定义文章集合
const posts = defineCollection({
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.coerce.date().optional(),
            modDate: z.coerce.date().optional(),

            // 作者双字段：author 存拼音(用于链接)，authorName 存中文(用于显示)
            author: z.string().optional().default('admin'),
            authorName: z.string().optional().default('恒明'),

            categories: z.array(z.string()).default([]),
            tags: z.array(z.string()).default([]).optional(),

            draft: z.boolean().default(false).optional(),
            description: z.string().optional(),
            pin: z.boolean().default(false).optional(),

            commentsUrl: z.string().optional(),
            source: z.optional(z.object({ url: z.string(), title: z.string() })),
        }),
});

// 2. 定义导师详情档案 (保留此项以支撑 /authors/[author] 页面)
const authors = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),              // 对应 authorName
        title: z.string(),             // 导师头衔
        bio: z.string(),               // 导师简介
        avatar: z.string().optional().nullable(),
    }),
});

export const collections = {
    posts,
    authors,
};